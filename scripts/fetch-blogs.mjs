import https from 'https';
  import { writeFileSync, mkdirSync, existsSync } from 'fs';
  import { join } from 'path';

  const HASHNODE_HOST = 'yourharsh.hashnode.dev';
  const API = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F${HASHNODE_HOST}%2Frss.xml`;

  function get(url) {
    return new Promise((resolve, reject) => {
      https.get(url, { headers: { 'User-Agent': 'portfolio-build/1.0', 'Accept': 'application/json' } }, res => {
        if (res.statusCode === 301 || res.statusCode === 302) return get(res.headers.location).then(resolve).catch(reject);
        let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(d));
      }).on('error', reject);
    });
  }

  const empty = JSON.stringify({ posts: [], fullPosts: {} }, null, 2);
  const dir = join(process.cwd(), 'src/data');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  try {
    const raw = await get(API);
    const data = JSON.parse(raw);
    if (data.status !== 'ok' || !data.items?.length) {
      console.error('RSS fetch failed:', data.message || 'no items');
      writeFileSync(join(dir, 'blogs.json'), empty);
      process.exit(0);
    }
    const posts = data.items.map(item => ({
      title: item.title,
      brief: item.description.replace(/<[^>]+>/g, '').substring(0, 250).trim(),
      slug: item.link.split('/').pop(),
      coverImage: { url: item.thumbnail || '' },
      publishedAt: new Date(item.pubDate).toISOString(),
    }));
    const fullPosts = Object.fromEntries(data.items.map(item => {
      const slug = item.link.split('/').pop();
      const html = item.content || item.description || '';
      return [slug, {
        title: item.title,
        brief: item.description.replace(/<[^>]+>/g, '').substring(0, 250).trim(),
        slug,
        coverImage: { url: item.thumbnail || '' },
        publishedAt: new Date(item.pubDate).toISOString(),
        content: { html },
        tags: (item.categories || []).map(name => ({ name })),
        author: { name: data.feed?.author || 'Harsh', profilePicture: data.feed?.image || '' },
        readTimeInMinutes: Math.max(1, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200)),
      }];
    }));
    writeFileSync(join(dir, 'blogs.json'), JSON.stringify({ posts, fullPosts }, null, 2));
    console.log(`Fetched ${posts.length} posts`);
  } catch (e) {
    console.error('Fetch failed:', e.message);
    writeFileSync(join(dir, 'blogs.json'), empty);
  }
import https from 'https';
  import { writeFileSync, mkdirSync, existsSync } from 'fs';
  import { join } from 'path';

  const HASHNODE_HOST = 'yourharsh.hashnode.dev';

  function cdata(str) {
    return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
  }
  function getTag(xml, name) {
    const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`));
    return m ? cdata(m[1]) : '';
  }
  function getAllTags(xml, name) {
    const re = new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`, 'g');
    const out = []; let m;
    while ((m = re.exec(xml)) !== null) out.push(cdata(m[1]));
    return out;
  }
  function getSlug(item) {
    const g = item.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)?.[1] || '';
    return g.split('/').pop() || '';
  }
  function getCoverUrl(item) {
    return item.match(/<media:content[^>]*url="([^"]+)"/)?.[1] ||
      item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] ||
      item.match(/<img[^>]*src="([^"]+)"/)?.[1] || '';
  }
  function readTime(html) {
    return Math.max(1, Math.round(html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length / 200));
  }
  function get(url) {
    return new Promise((resolve, reject) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio/1.0)', 'Accept': 'application/rss+xml,*/*' } },
  res => {
        if (res.statusCode === 301 || res.statusCode === 302) return get(res.headers.location).then(resolve).catch(reject);
        let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(d));
      }).on('error', reject);
    });
  }

  const empty = JSON.stringify({ posts: [], fullPosts: {} }, null, 2);
  const dir = join(process.cwd(), 'src/data');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  try {
    const xml = await get(`https://${HASHNODE_HOST}/rss.xml`);
    if (!xml.includes('<item>')) {
      console.error('No items found in RSS feed');
      writeFileSync(join(dir, 'blogs.json'), empty);
      process.exit(0);
    }
    const channelImg = xml.match(/<image>[\s\S]*?<url>([^<]+)<\/url>/)?.[1] || '';
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
    const posts = items.map(item => ({
      title: getTag(item, 'title'), brief: getTag(item, 'description'),
      slug: getSlug(item), coverImage: { url: getCoverUrl(item) },
      publishedAt: new Date(getTag(item, 'pubDate')).toISOString(),
    }));
    const fullPosts = Object.fromEntries(items.map(item => {
      const slug = getSlug(item);
      const contentHtml = getTag(item, 'content:encoded');
      return [slug, {
        title: getTag(item, 'title'), brief: getTag(item, 'description'),
        slug, coverImage: { url: getCoverUrl(item) },
        publishedAt: new Date(getTag(item, 'pubDate')).toISOString(),
        content: { html: contentHtml },
        tags: getAllTags(item, 'category').map(name => ({ name })),
        author: { name: getTag(item, 'dc:creator'), profilePicture: channelImg },
        readTimeInMinutes: readTime(contentHtml),
      }];
    }));
    writeFileSync(join(dir, 'blogs.json'), JSON.stringify({ posts, fullPosts }, null, 2));
    console.log(`Fetched ${posts.length} posts from Hashnode RSS`);
  } catch (e) {
    console.error('RSS fetch failed:', e.message);
    writeFileSync(join(dir, 'blogs.json'), empty);
  }
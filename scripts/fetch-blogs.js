const https = require('https');
  const fs = require('fs');

  const HASHNODE_RSS = 'https://yourharsh.hashnode.dev/rss.xml';

  https.get(HASHNODE_RSS, res => {
    let xml = '';
    res.on('data', chunk => xml += chunk);
    res.on('end', () => {
      const cd = s => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
      const gt = (x, n) => { const m = x.match(new RegExp(`<${n}>([\\s\\S]*?)<\\/${n}>`)); return m ? cd(m[1]) : '' };
      const gta = (x, n) => { const re = new RegExp(`<${n}>([\\s\\S]*?)<\\/${n}>`, 'g'); const o = []; let m; while ((m =
  re.exec(x))) o.push(cd(m[1])); return o };
      const slug = i => (i.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)?.[1] || '').split('/').pop();
      const cover = i => i.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] || i.match(/<media:content[^>]*url="([^"]+)"/)?.[1] || '';
      const img = xml.match(/<image>[\s\S]*?<url>([^<]+)<\/url>/)?.[1] || '';
      const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

      const posts = items.map(i => ({
        title: gt(i, 'title'),
        brief: gt(i, 'description').replace(/<[^>]+>/g, '').substring(0, 250).trim(),
        slug: slug(i),
        coverImage: { url: cover(i) },
        publishedAt: new Date(gt(i, 'pubDate')).toISOString()
      }));

      const fullPosts = Object.fromEntries(items.map(i => {
        const s = slug(i);
        const html = gt(i, 'content:encoded');
        return [s, {
          title: gt(i, 'title'),
          brief: gt(i, 'description').replace(/<[^>]+>/g, '').substring(0, 250).trim(),
          slug: s,
          coverImage: { url: cover(i) },
          publishedAt: new Date(gt(i, 'pubDate')).toISOString(),
          content: { html },
          tags: gta(i, 'category').map(n => ({ name: n })),
          author: { name: gt(i, 'dc:creator'), profilePicture: img },
          readTimeInMinutes: Math.max(1, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200))
        }];
      }));

      fs.writeFileSync('blogs.json', JSON.stringify({ posts, fullPosts }, null, 2));
      console.log(`Done! Wrote ${posts.length} posts to blogs.json`);
    });
  }).on('error', err => console.error('Failed:', err.message));

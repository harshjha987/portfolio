 export interface HashnodePost {
    title: string;
    brief: string;
    slug: string;
    coverImage: { url: string };
    publishedAt: string;
  }

  export interface HashnodeFullPost extends HashnodePost {
    content: { html: string };
    tags: { name: string }[];
    author: { name: string; profilePicture: string };
    readTimeInMinutes: number;
  }

  const HASHNODE_HOST = 'yourharsh.hashnode.dev';

  function cdata(str: string): string {
    return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
  }

  function getTag(xml: string, name: string): string {
    const match = xml.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`));
    return match ? cdata(match[1]) : '';
  }

  function getAllTags(xml: string, name: string): string[] {
    const regex = new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`, 'g');
    const results: string[] = [];
    let m;
    while ((m = regex.exec(xml)) !== null) results.push(cdata(m[1]));
    return results;
  }

  function getSlug(item: string): string {
    const guid = item.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)?.[1] || '';
    return guid.split('/').pop() || '';
  }

  function getCoverUrl(item: string): string {
    return (
      item.match(/<media:content[^>]*url="([^"]+)"/)?.[1] ||
      item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] ||
      item.match(/<img[^>]*src="([^"]+)"/)?.[1] ||
      ''
    );
  }

  function calcReadTime(html: string): number {
    const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }

  async function fetchRSS(): Promise<string> {
    const res = await fetch(`https://${HASHNODE_HOST}/rss.xml`, {
      cache: 'no-store',
    });
    return res.text();
  }

  export async function getHashnodePosts(): Promise<HashnodePost[]> {
    try {
      const xml = await fetchRSS();
      const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

      return items.map(item => ({
        title: getTag(item, 'title'),
        brief: getTag(item, 'description'),
        slug: getSlug(item),
        coverImage: { url: getCoverUrl(item) },
        publishedAt: new Date(getTag(item, 'pubDate')).toISOString(),
      }));
    } catch (error) {
      console.error('Hashnode RSS error:', error);
      return [];
    }
  }

  export async function getHashnodePost(slug: string): Promise<HashnodeFullPost | null> {
    try {
      const xml = await fetchRSS();
      const channelImg = xml.match(/<image>[\s\S]*?<url>([^<]+)<\/url>/)?.[1] || '';
      const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
      const item = items.find(i => getSlug(i) === slug);

      if (!item) return null;

      const contentHtml = getTag(item, 'content:encoded');

      return {
        title: getTag(item, 'title'),
        brief: getTag(item, 'description'),
        slug,
        coverImage: { url: getCoverUrl(item) },
        publishedAt: new Date(getTag(item, 'pubDate')).toISOString(),
        content: { html: contentHtml },
        tags: getAllTags(item, 'category').map(name => ({ name })),
        author: { name: getTag(item, 'dc:creator'), profilePicture: channelImg },
        readTimeInMinutes: calcReadTime(contentHtml),
      };
    } catch (error) {
      console.error('Hashnode RSS error:', error);
      return null;
    }
  }

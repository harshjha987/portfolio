export interface HashnodePost {
    title: string;
    brief: string;
    slug: string;
    coverImage: {
      url: string;
    };
    publishedAt: string;
  }

  export interface HashnodeFullPost extends HashnodePost {
    content: {
      html: string;
    };
    tags: { name: string }[];
    author: {
      name: string;
      profilePicture: string;
    };
    readTimeInMinutes: number;
  }

  const HASHNODE_HOST = 'yourharsh.hashnode.dev';

  export async function getHashnodePosts(): Promise<HashnodePost[]> {
    const query = `
      query {
        publication(host: "${HASHNODE_HOST}") {
          posts(first: 10 , sortBy: DATE_PUBLISHED_DESC) {
            edges {
              node {
                title
                brief
                slug
                coverImage { url }
                publishedAt
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 300 },
    });

    const json = await response.json();
    return json.data.publication.posts.edges.map((edge: any) => edge.node);
  }

  export async function getHashnodePost(slug: string): Promise<HashnodeFullPost | null> {
    const query = `
      query {
        publication(host: "${HASHNODE_HOST}") {
          post(slug: "${slug}") {
            title
            brief
            slug
            coverImage { url }
            publishedAt
            content { html }
            tags { name }
            author {
              name
              profilePicture
            }
            readTimeInMinutes
          }
        }
      }
    `;

    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 300 },
    });

    const json = await response.json();
    return json.data?.publication?.post ?? null;
  }

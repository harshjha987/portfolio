export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
}
  
  export interface HashnodeResponse {
    data: {
      user: {
        publication: {
          posts: HashnodePost[];
        };
      };
    };
  }
  
  
  export async function getHashnodePosts(): Promise<HashnodePost[]> {
    const query = `
      query {
        publication(host: "yourharsh.hashnode.dev") {
          posts(first: 5) {
            edges {
              node {
                title
                brief
                slug
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    const json = await response.json();
    return json.data.publication.posts.edges.map((edge: any) => edge.node);
  }
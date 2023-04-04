const BASE = 'https://jsonplaceholder.typicode.com'

export const API = {
  getAllPosts: async () => {
    let res = await fetch(`${BASE}/posts/`);
    let json = await res.json();
    return json;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let res = await fetch(`${BASE}/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await res.json();
    return json;
  },
}
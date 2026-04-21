import axios from "axios";

interface Post {
  id: number;
  name: string;
  title: string;
}
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
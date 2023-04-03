import { useEffect, useReducer, useState } from "react";
import { Post } from "./types/Post";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let json = await res.json();
    setPosts(json);
    setLoading(false);
  }


  useEffect(() => {
    getPosts();
  }, [])


  return(
    <div>
      {loading &&
      <div>Carregando...</div>}
      <hr/>
      {!loading && posts.length > 0 &&
      <>
        <div>Total de posts: {posts.length}</div>
        <div>
          {posts.map((item, key) => (
            <div style={{marginBottom: 10}}>
              <Posts key={key} data={item}/>  
            </div>
          ))}
        </div>
      </>}
      

    </div>
  );
}

export default App;
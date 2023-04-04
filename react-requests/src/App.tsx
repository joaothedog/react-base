import { useEffect, useReducer, useState } from "react";
import { Post } from "./types/Post";
import { PostForm } from "./components/Forms/Post/PostForm";
import PostItem from "./components/Forms/Post/PostItem";


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

  const handleAdd = async (title: string, body: string) => {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let json = await res.json();
      
      if(json.id) {
        alert('Post adicionado com sucesso');
      } else {
        alert('Ocorreu algum problema! =(');
      }
  }

  return(
    <div>
      <PostForm onAdd={handleAdd}/>
      {loading &&
      <div>Carregando...</div>}
      <hr/>
      {!loading && posts.length > 0 &&
      <>
        <div>Total de posts: {posts.length}</div>
        <div>
          {posts.map((item, key) => (
            <PostItem key={key} data={item}/>  
          ))}
        </div>
      </>}
      

    </div>
  );
}

export default App;
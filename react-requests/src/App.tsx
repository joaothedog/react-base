import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import { PostForm } from "./components/Forms/Post/PostForm";
import PostItem from "./components/Forms/Post/PostItem";
import { API } from "./services/api";



const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    setLoading(true);
    let json = await API.getAllPosts();
    setPosts(json);
    setLoading(false);
  }

  const handleAdd = async (title: string, body: string) => {
    let json = await API.addNewPost(title, body, 1);
    if(json) {
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
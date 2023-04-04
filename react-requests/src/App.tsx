import { useEffect, useReducer, useState } from "react";
import { Post } from "./types/Post";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false);
  const [addTitlePost, setAddTitlePost] = useState('');
  const [addBodyPost, setAddBodyPost] = useState('');

  const getPosts = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let json = await res.json();
    setPosts(json);
    setLoading(false);
  }

  const handleAddPost = async () => {
    if(addTitlePost && addBodyPost) {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
          title: addTitlePost,
          body: addBodyPost,
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
        alert('Ocorreu algum problema! =(')
      }
    } else { 
      alert('Preencha os campos!');
    }
  }

  useEffect(() => {
    getPosts();
  }, [])


  return(
    <div>
      <fieldset style={{marginBottom: 10, display: 'flex', flexDirection: 'column', maxWidth: 500, margin: 'auto', padding: 20}}>
        <legend>Adicionar um post</legend>
        <input value={addTitlePost} onChange={(e) => {setAddTitlePost(e.target.value)}} type="text" placeholder="Título do post" />
        <textarea value={addBodyPost} onChange={(e) => {setAddBodyPost(e.target.value)}}></textarea>
        <button onClick={handleAddPost}>Adicionar</button>
      </fieldset>
      {loading &&
      <div>Carregando...</div>}
      <hr/>
      {!loading && posts.length > 0 &&
      <>
        <div>Total de posts: {posts.length}</div>
        <div>
          {posts.map((item, key) => (
            <div key={key} style={{marginBottom: 10}}>
              <Posts data={item}/>  
            </div>
          ))}
        </div>
      </>}
      

    </div>
  );
}

export default App;
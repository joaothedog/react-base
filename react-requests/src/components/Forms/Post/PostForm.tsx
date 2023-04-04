import { useState } from "react";

interface PropsPostForm {
  onAdd: (title: string, body: string) => void,
}

export const PostForm = ({onAdd} : PropsPostForm) => {
  const [addTitlePost, setAddTitlePost] = useState('');
  const [addBodyPost, setAddBodyPost] = useState('');

  const handleAddClick = () => {
    if(addTitlePost && addBodyPost) {
      onAdd(addTitlePost, addBodyPost);
    } else {
      alert('Preencha os campos!');
    }
  }

  return (
    <fieldset style={{marginBottom: 10, 
      display: 'flex', 
      flexDirection: 'column', 
      maxWidth: 500, 
      margin: 'auto', 
      padding: 20}}>
        <legend>Adicionar um post</legend>
        <input value={addTitlePost} onChange={(e) => {setAddTitlePost(e.target.value)}} type="text" placeholder="Título do post" />
        <textarea value={addBodyPost} onChange={(e) => {setAddBodyPost(e.target.value)}}></textarea>
        <button onClick={handleAddClick}>Adicionar</button>
    </fieldset>
  );
}
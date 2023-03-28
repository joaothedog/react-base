import React, { useState } from "react";

function App() {
  const [nome, setNome] = useState('');

  // const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
  //   setNome(e.target.value);
  // }

  return (
    <div>
      Nome:
      <input 
        value={nome} 
        onChange={e => {setNome(e.target.value)}} 
        type='text' />
      <p>Meu nome é: {nome}</p>
      
    </div>
  )
}

export default App;
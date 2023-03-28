import React, { useState } from "react";

function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState(0);

  // const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
  //   setNome(e.target.value);
  // }

  return (
    <div>
      Nome:
      <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <br/>
      Sobrenome:
      <input type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
      <br/>
      Idade:
      <input type='text' value={idade} onChange={(e) => setIdade(parseInt(e.target.value))}/>
      <hr/>
      Olá {nome} {sobrenome}, tudo bem?
      <br/>
      Você tem {idade} anos.
      
    </div>
  )
}

export default App;
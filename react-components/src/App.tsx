import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('Carlos');

  const handleCountNum = () => {
    setNum(num+1);
  }

  const handleChangeName = () => {
    if(name === 'Carlos') {
      setName('João');
    } else {
      setName('Carlos');
    }
  }

  return (
    <div>
      <p>O valor atual do número é: {num}</p>
      <p>O meu nome é: {name}</p>
      <button onClick={handleCountNum}>Clique aqui</button>
      <button onClick={handleChangeName}>Clique para aparecer meu nome</button>
    </div>
  )
}

export default App;
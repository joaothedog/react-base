import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('João');

  useEffect(() => {
    alert(`O novo valor da variável ${name}`)
  }, [name])

  const handleClick = () => {
    name === 'João' ? setName('Pedro') : setName('João');
  }

  return (
    <div>
      o meu nome é: {name}
      <hr/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App;
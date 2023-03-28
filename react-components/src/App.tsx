import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const handleSub = () => {
    num > 0 ? setNum(num-1) : setNum(num);
  }

  const handleAdd = () => {
    setNum(num+1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={handleSub}>-</button>
      <button>{num}</button>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default App;
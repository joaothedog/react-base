import Pessoa from "./components/Pessoa";

function App() {

  let array = [
    {name: 'joao', age: 10},
    {name: 'pedro', age: 20},
    {name: 'maria', age: 30},
    {name: 'carlinha', age: 40},
  ];

  return (
    <div>
      <h1>Lista de presença</h1>
      <ul>
        {array.map((item, key) => (
          <Pessoa data={item} key={key}/>
        ))}
      </ul>
    </div>
  )
}

export default App;
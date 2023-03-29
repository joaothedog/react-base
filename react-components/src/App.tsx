import * as C from './AppStyles';

function App() {
  return (
    <C.Container bgColor="blue">
      <span>Texto</span>
      <C.Button bgColor="#ff0000" small>Olá</C.Button>
      <C.Button bgColor="#00ff00" small>Olá2</C.Button>
    </C.Container>
  )
}

export default App;
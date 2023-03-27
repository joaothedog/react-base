import Expressoes from "./components/Expressoes";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header titleHeader="Componente APP (REACTCOMPONENTS)"/>
      <Header titleHeader="Exemplo outro Header"/>
      Olá, sou um componente! (APP)
      <Expressoes/>
    </div>
  )
}

export default App;
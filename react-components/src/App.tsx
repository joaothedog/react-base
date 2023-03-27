import Expressoes from "./components/Expressoes";
import Header from "./components/Header";
import Imagem from "./components/Imagem";

function App() {
  return (
    <div>
      <Header titleHeader="React Components"/>
      Olá, sou um componente! (APP)
      <Expressoes/>
      {/* <Imagem url="https://www.google.com.br/google.jpg" subtitle="Logo marca do google"/> */}
      <Imagem subtitle="Logo marca do google">
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Imagem>
    </div>
  )
}

export default App;
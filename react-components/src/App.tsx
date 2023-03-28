function App() {

  const handleShowMessage = () => {
    alert('O botão foi clicado')
  }


  return (
    <div>
      <button onClick={handleShowMessage}>Clique aqui</button>
    </div>
  )
}

export default App;
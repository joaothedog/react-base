import { useState } from "react";

function App() {
  const [showMsg, setShowMsg] = useState(false)

  const handleClickShowMsg = () => {
    setShowMsg(!showMsg);
  }

  return (
    <div>
      <button onClick={handleClickShowMsg}>{showMsg ? 'Logout' : 'Login'}</button>

      <div>Faça login no nosso sistema!</div>

      {showMsg && 
        <div>Você efetuou o login no sistema</div>
      }

    </div>
  )
}

export default App;
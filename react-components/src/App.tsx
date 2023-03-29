import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName])

  return (
    <div>
      <input type='text' value={name} placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)}/>
      <input type='text' value={lastName} placeholder='Digite sobrenome' onChange={(e) => setLastName(e.target.value)}/>
      Nome completo: {fullName}
    </div>
  )
}

export default App;
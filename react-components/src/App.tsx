import React, { useState } from "react";
import Button from "./components/Button";

function App() {

  const handleEventButton = (msg: string) => {
    alert('App component: ' + msg)
  }

  return (
    <div>
      <Button clickFn={handleEventButton} textButton="Clique" />
    </div>
  )
}

export default App;
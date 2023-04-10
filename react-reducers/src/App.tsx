import { useReducer } from "react"

interface reducerState {
  count: number;
}

interface reducerAction {
  type: string;
  payload?: number;
}

const initialState = { count: 0 };

const reducer = (state: reducerState, action: reducerAction) => {
  switch(action.type) {
    case 'ADD': 
      return {...state, count: state.count + 1};
    case 'DEL':
      return {...state, count: state.count - 1};
    case 'RESET':
      return initialState;
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">

    </div>
  )
}

export default App

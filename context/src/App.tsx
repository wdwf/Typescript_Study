import { createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface ContextInter {
  theme: string;
  title: string;
}

const Context = createContext<ContextInter | null>(null);

function App() {
  const appContext: ContextInter = {
    theme: "dark",
    title: "Hello World",
  };
  
  return (
    <div className="App">

      {/* 
        Assim providenciamos um contexto para podermos acessar os valores deles
      */}
      <Context.Provider value={appContext}>
        <Login />
      </Context.Provider>
    </div>
  )
}

function Login() {
  return <Button />
}

function Button() {
  const ctx = useContext(Context);

  console.log(ctx);
  

  return (
    <button>{ctx?.theme} - {ctx?.title}</button>
  )
}

export default App

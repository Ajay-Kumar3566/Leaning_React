import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl width-50px height-50px'>Tailwind Test</h1>
      
      <Card  username="chai aur code"  btnText ="click me"/>
      <Card  username="ajay verma" />
    </>
  )
}

export default App

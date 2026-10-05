import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 15
  const addValue =()=>{
    
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)// it all setCounter () will be treated as single bunch . so it will see "ARE EK HI KAAM TO HO RHA HAI "
    // console.log("clicked",counter);//click krne per counter ki value to bdh rhi hai lekin UI per show nhi ho rhi hai ,,, yhi to kaam hi react ka , smjhe guru..isiliye hook ka use karte hai 


    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    // here a single setCounter() will be treated as a single bunch so all method will change the value of counter
    
      
  }

  const removeValue = () =>{
    setCounter(counter-1)

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <footer> footer : {counter}</footer>
    </>
  )
}

export default App

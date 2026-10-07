
import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">


        <button
        onClick={()=>setColor("Red")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>

        <button
        onClick={()=>setColor("Green")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>

        <button
        onClick={()=>setColor("Blue")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}
        >Blue</button>

        <button
        onClick={()=>setColor("Yellow")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"yellow"}}
        >Yellow</button>

        <button
        onClick={()=>setColor("Pink")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}
        >Pink</button>

        <button
        onClick={()=>setColor("Skyblue")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"skyblue"}}
        >Skyblue</button>

        <button
        onClick={()=>setColor("Magenta")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"magenta"}}
        >Magenta</button>

        <button
        onClick={()=>setColor("Orange")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}
        >Orange</button>

        <button
        onClick={()=>setColor("Black")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"black"}}
        >Black</button>
      </div>
    </div>
   </div>
  )
}

export default App

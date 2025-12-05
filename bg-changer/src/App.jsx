import Button from "./components/Button"
import Body from "./components/Body"
import { colors } from "./utils/Color"
import { useState } from "react"
function App() {
  const [Bg,setBg]=useState('#FFF')
  return (
    <>
    <Body bgColor={Bg}/>
    <div className="flex absolute bg-slate-900 h-[10vh] w-[100vw] gap-10 justify-center">
      {colors.map((color)=>{
        return <Button onChange={setBg} key={color.code} text={color.name} color={`#${color.code}`}></Button>
      })}
    </div>
    </>
  )
}

export default App

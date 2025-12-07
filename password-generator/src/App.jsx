import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  let [password,setPassword]=useState("")
  let [allowChar,setAllowChar]=useState(false)
  let [allowNum,setAllowNum]=useState(false)
  let [length,setLength]=useState(8)
  let passwordRef=useRef(null)

  const passwordGenerate=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNum) str += '0123456789'
    if(allowChar) str+='!@#$%^&*()+{}'

    for(let index=1;index<=length;index++){
      pass+=str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)

  },[setPassword,length,allowNum,allowChar])

  const CopyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerate();
  },[passwordGenerate,length,allowChar,allowNum])

  return (
    <>
    <div className="w-[100vw] h-[100vh] bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col h-40 w-128 bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-semibold text-white mx-6 my-2">Password Generator</h1>
        <div className="flex flex-row mx-6 my-2">
          <input value={password} ref={passwordRef} type="text" className="bg-white w-full outline-none p-2 text-orange-800 font-semibold text-xl rounded-md"></input>
          <button onClick={CopyPasswordToClipboard} className="bg-blue-500 text-white px-3 py-2">Copy</button>
        </div>
        <div className="flex mx-6 my-2 gap-5">
          <div>
            <input 
            type="range" 
            max={24} 
            min={8}
            onChange={(e)=>setLength(e.target.value)} />
            <label className="text-white px-1">Length:{length}</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            checked={allowNum}
            onChange={()=>setAllowNum((prev)=>!prev)} />
            <label className="text-white px-1">Number</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            checked={allowChar}
            onChange={()=>setAllowChar((prev)=>!prev)} />
            <label className="text-white px-1">Character</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

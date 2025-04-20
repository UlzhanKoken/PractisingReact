import { useState } from 'react'

function TextInput() {
  const [text, setText] = useState("")
  return (
    <>
      <h1>Task 2 Input</h1>
       <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
      <p>{text}</p>
    </>
  )
}

export default TextInput

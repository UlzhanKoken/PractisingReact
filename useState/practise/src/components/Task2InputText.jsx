import { useState } from 'react'

function TextInput() {
  const [text, setText] = useState("")
  return (
    <>
        <h1>Task 2 Text Input </h1>
       <input type="text" onChange={(e) => setText(e.target.value)}/>
       <p>{text}</p>
    </>
  )
}

export default TextInput

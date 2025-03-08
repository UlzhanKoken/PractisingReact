import { useState } from 'react'

export default function TextInput(){
    const [value, setValue] = useState('')
    
    return(
        <>
            <h1>Task 2</h1>
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <p>{value}</p>
        </>
    )
}
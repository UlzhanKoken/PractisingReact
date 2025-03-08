import { use, useState } from 'react'

export default function ToggleText(){
    const [isVisible, setIsVisible] = useState(true)
    return(
        <>
            <h1>Task 3</h1>
            <button onClick={()=>setIsVisible(!isVisible)}>
                {isVisible ? "hide" : "show"}
            </button>
            {isVisible && <p>This text can be hidden</p>}
        </>
    )
}
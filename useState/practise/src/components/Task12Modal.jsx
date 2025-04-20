import { useState } from 'react'

function Modal(){
    const [block, setBlock] = useState(true)
    function toggleItem(){
        const newBlock = block === true ? false : true;
        setBlock(newBlock)
        const box = document.getElementById("modal")
        if(box){
            box.style.display = newBlock ? "block": "none"
        }
    }
    return(
        <>
            <button onClick={toggleItem}>{block ? "visible" : " not visible"}</button>
            <div id="modal" style={{backgroundColor:'yellow', width:"200px", height:"200px"}}></div>
        </>
    )
}
export default Modal

    // setTheme(newTheme)
    // document.body.style.backgroundColor = newTheme === true ? "black" : "white"
    // document.body.style.color = newTheme === true ? "white" : "black"       
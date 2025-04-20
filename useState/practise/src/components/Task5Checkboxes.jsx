import { useState } from 'react'

function Checkboxes() {
  const [checkedItems, setCheckedItems] = useState([]);
  const checkboxes = ["React", "Vue", "Angular", "Svelte"];


  const handleCheckboxChange = (event) =>{
    setCheckedItems((prev)=>
        event.target.checked ? 
            [...prev, event.target.value]:
            prev.filter((item)=>item!==event.target.value)
    )
  }
  return (
    <>
        
        <h1>Task 6 Custom Checkboxes</h1>
         
         {
            checkboxes.map((name)=>(
               <div>
                 <label key={name}>
                    <input type="checkbox" 
                    value={name}
                    onChange={handleCheckboxChange}
                    checked = {checkedItems.includes(name)}
                    />
                    {name}
                </label>
               </div>
            ))
         }

        <p>Вы выбрали: {checkedItems.join(", ") || "ничего"}</p>
    </>
  )
}

export default Checkboxes

import { useState } from 'react'

function Checkboxesss() {
  const [checkedItems, setCheckedItems] = useState([]);
  const checkboxes = ["React", "Vue", "Angular", "Svelte"];

  function handleItem(event){
    setCheckedItems((prev)=>
      event.target.checked ? 
      [...prev, event.target.value]
      : prev.filter((item)=>item!==event.target.value)
    )
  }
  return (
    <>
      <h1>Checkbox</h1>
      {
        checkboxes.map((item)=>(
          <div>
            <label>
              <input type="checkbox"
                onChange={handleItem}
                checked={checkedItems.includes(item)}
                value={item}
              />
              {item}
            </label>
          </div>
        ))
      }
      <p>You choose : {checkedItems.join("," || "nothing")} </p>
    </>
  )
}

export default Checkboxesss

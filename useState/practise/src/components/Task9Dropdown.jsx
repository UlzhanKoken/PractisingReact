import { use, useState } from 'react'

function Dropdown() {
    const options = ["React", "Vue", "Angular", "Svelte"];
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
    <h1>Task 9 Dropdown</h1>
        <select onChange={(e)=>setSelectedOption(e.target.value)} value={selectedOption}>
            <option value="">Choose...</option>
            {
                options.map(option=>(
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))
            }
        </select>
                
        <p>U choose: {selectedOption || "nothing"}</p>
    </>
  )
}

export default Dropdown

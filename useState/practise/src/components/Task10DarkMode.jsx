import { useState } from 'react'

function DarkMode() {
  const [theme, setTheme] = useState(true)

  function darkMode(){
    const newTheme = theme === true ? false : true;
    setTheme(newTheme)
    document.body.style.backgroundColor = newTheme === true ? "black" : "white"
    document.body.style.color = newTheme === true ? "white" : "black"
   
  }
  return (
    <>
    <h1>Task 3 Dark Mode</h1>
    <button onClick={darkMode}>Dark Mode</button>
    </>
  )
}

export default DarkMode

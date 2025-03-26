import { useState } from 'react'

function ThemeSwitcher() {
  const [isDark, setisDark] = useState(true)
  return (
    <>
    <h1>Task 3 Theme Switcher</h1>
      <div style={{backgroundColor:isDark?"black" : "white" , color:isDark?"white":"black"}}>
        task 3
      </div>
    </>
  )
}

export default ThemeSwitcher

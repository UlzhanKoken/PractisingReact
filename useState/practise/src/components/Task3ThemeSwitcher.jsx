import { useState } from 'react'

function ThemeSwitcher() {
  const [isDark, setisDark] = useState(true)


  return (
    <>
    <h1>Task 3 Theme Switcher</h1>
    <div style={{backgroundColor: isDark ? "#333":"#fff", color:isDark?"#fff" : "#333"}}>Hello</div>
    </>
  )
}

export default ThemeSwitcher

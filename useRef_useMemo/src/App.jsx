import { useState } from 'react'
import AutoFocusInput from './Components/AutoFocus'
import Timer from './Components/Interval'
import ReadInputValue from './Components/ReadInput'
import TriggerHiddenButton from './Components/Click'
import ChangeStyle from './Components/ChangeStyle'
import ScrollToRef from './Components/Scroll'
import HeavyCalculation from './Components/HeavyCalc'
import UpperCaseText from './Components/UpperCase'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <AutoFocusInput/>
      <Timer/>
      <ReadInputValue/>
      <TriggerHiddenButton/>
      <ChangeStyle/>
      <ScrollToRef/>
      <HeavyCalculation/>
      <UpperCaseText text="hello" />
      
    </>
  )
}

export default App

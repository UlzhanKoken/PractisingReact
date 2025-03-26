import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInput from './components/Task1TextInput'
import ToggleText from './components/Task2ToggleText'
import Todo from './components/Task3Todo'
import CheckboxGroup from './components/Task5CheckBox'
import FilteredList from './components/FilterProducts'
import Dropdown from './components/Task9Dropdown'
function App() {


  return (
    <>
      <TextInput/>
      <ToggleText/>
      <Todo/>
      <CheckboxGroup/>
      <FilteredList/>
      <Dropdown/>
    
    </>
  )
}

export default App

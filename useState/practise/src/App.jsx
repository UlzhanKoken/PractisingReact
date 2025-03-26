import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Task1Counter'
import TextInput from './components/Task2InputText'
import ThemeSwitcher from './components/Task3ThemeSwitcher'
import Todo from './components/Task4Todo'
import Checkboxes from './components/Task5Checkboxes'
import FilterByCategory from './components/Task7FilterByCategory'
import Likes from './components/Task8Likes'
import Dropdown from './components/Task9Dropdown'
import DarkMode from './components/Task10DarkMode'
function App() {


  return (
    <>
      <Counter/>
      <TextInput/>
      <ThemeSwitcher/>
      <Todo/>
      <Checkboxes/>
      <FilterByCategory/>
      <Likes/>
      <Dropdown/>
      <DarkMode/>
    </>
  )
}

export default App

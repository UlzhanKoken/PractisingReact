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
import Tododo from './components/Task4Todododo'
import Checkboxesss from './components/Task5Checkboxesss'
import FilterByCategoryyy from './components/Task7FilterByCategoryy'
import EmailCheck from './components/Task11EmailCheck'
import Modal from './components/Task12Modal'
import Modall from './components/Task12Modall'
import Numbers from './components/Task13Numbers'
import SearchList from './components/Task16Filter'
import Tabs from './components/Task17Tabs'
function App() {
  return (
    <>
      <Counter name="Ulzhan"/>
      <TextInput/>
      <ThemeSwitcher/>
      <Todo/>
      <Checkboxes/>
      <FilterByCategory/>
      <FilterByCategoryyy/>
      <Likes/>
      <Dropdown/>
      <DarkMode/>
      <Tododo/>
      <Checkboxesss/>
      <EmailCheck/>
      <Modal/>
      <Modall/>
      <Numbers/>
      <SearchList/>
      <Tabs/>
    </>
  )
}

export default App

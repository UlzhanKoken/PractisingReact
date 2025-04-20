import { useState } from 'react'
import Calculator from './calculator'
import UserList from './components/UserList';

function App() {
  const users = [
    { name: 'Айгерим', age: 28, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Ерлан', age: 32 , avatar: 'https://randomuser.me/api/portraits/women/65.jpg'},
    { name: 'Жанна', age: 24, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
  ];
  return (
    <>
     <h1 style={{ textAlign: 'center' }}>Пользователи</h1>
     <UserList users={users}/>
     <Calculator/>
    </>
  )
}
export default App

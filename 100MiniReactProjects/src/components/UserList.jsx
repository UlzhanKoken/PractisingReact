import { useState } from 'react'
import UserProfile from './UserProfile';

const UserList = ({users}) => {
  return (
    <>
        <div style={styles.list}>
            {
              
                users.map((user,index)=>
                   <UserProfile key={index} name={users.name} age={user.age} avatar={user.avatar}/>
                )
            }
        </div>
    </>
  )
}


const styles = {
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      
    }
  };
  
  
export default UserList

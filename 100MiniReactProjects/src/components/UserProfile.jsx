import { useState } from 'react'

const defaultAvatar = 'https://via.placeholder.com/150';
function UserProfile({name, age, avatar}) {
 
  return (
    <>
        <div style={styles.card}>
            <img src={avatar || defaultAvatar} alt={name} style={styles.avatar} />
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
        </div>
    </>
  )
}
const styles = {
    card: {
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      width: '200px',
      margin: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    avatar: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '50%',
      marginBottom: '0.5rem'
    }
  };

  UserProfile.defaultProps = {
    avatar: defaultAvatar
  };
export default UserProfile

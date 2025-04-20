import React from 'react';


const defaultAvatar = 'https://via.placeholder.com/150';

const UserProfile = ({ name, age, avatar }) => {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    width: '200px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
};



export default UserProfile;

import UserProfile from "./UserProfile";
export default function UserList({ users }){
    return(
        <>
             <div style={styles.list}>
                {
                    users.map((user, index)=>
                        <UserProfile 
                            key={index}
                            name={user.name}
                            age={user.age}
                            avatar={user.avatar}
                        />
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
      gap: '15px',
    },
  };
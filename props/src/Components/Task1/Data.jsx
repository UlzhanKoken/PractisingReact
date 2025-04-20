    import UserList from "./UserList";
    export default function Data(){
        const users = [
            { name: 'Alice', age: 28, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { name: 'Bob', age: 35 , avatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
            { name: 'Charlie', age: 22, avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
        ];

        return(
            <>
                <UserList users={users}></UserList>
            </>
        )
    }
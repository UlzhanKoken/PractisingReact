import { useState } from 'react'

function EmailCheck() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    function handleSubmit(e){
        e.preventDefault();

        if(!email.includes('@')){
            setError("Incorrect mail")
            return 
        }
        setError("")
        alert("ok")
    }
    return(
        <>  
            <h1>Task 11 Email Check</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"  
                    placeholder='email...' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                <input 
                    type="password" 
                    placeholder='password...' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>

            <p>login: {email} password: {password}</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
        
    )
}
export default EmailCheck
import react, {useState} from "react";



const Authentication = () =>{


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
    <form onSubmit={async event=>{
        event.preventDefault()
    }}>
        <h1>Sign In Page</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' onChange={(event)=>{
            setUsername(event.target.value)
            }}></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' onChange={(event)=>{
            setPassword(event.target.value)
            }}></input>
        <button>Submit</button>
    </form>
    )
}

export default Authentication;

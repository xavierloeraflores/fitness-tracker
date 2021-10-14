import react, {useState, useContext, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { Capitalize } from "../utils/helper";
import { UserContext } from '../context/UserContext'


const Authentication = () =>{
    const history = useHistory()
    const params = useParams()

    const {isLoggedIn, setIsLoggedIn, setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    useEffect(()=>{
        if (isLoggedIn===true){
            // sends the user back to home when signed in. 
            history.push("/home") 
        }
    }, )

    return(
    <form onSubmit={async event=>{
        event.preventDefault()

    }}>
        <h1>{Capitalize(params.method)} Page</h1>
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


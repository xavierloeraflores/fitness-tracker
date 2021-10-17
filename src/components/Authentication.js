import react, {useState, useContext, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { Capitalize } from "../utils/helper";
import { UserContext } from '../context/UserContext'
import {register, login} from '../utils/apiClient'



const Authentication = () =>{
    const history = useHistory()
    const params = useParams()

    const {isLoggedIn, setIsLoggedIn, setUserToken } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    useEffect(async ()=>{
        if (isLoggedIn===true){
            // sends the user back to home when signed in. 
            history.push("/home")
        }
    }, [isLoggedIn])

    return(
    <form onSubmit={async event=>{
        event.preventDefault()
        if (params.method=='register') {
            const registerData = await register({username:username, password:password})
            if(registerData && !registerData.name) {
                localStorage.setItem("userToken", registerData.token);
                setUserToken(registerData.token)
                setIsLoggedIn(true)
            }else{
                alert('failed')
            }
        }
        if (params.method=='login') {
            const loginData = await login({username:username, password:password})
            console.log(loginData)
            if (loginData && !loginData.name) {
                localStorage.setItem("userToken", loginData.token);
                setUserToken(loginData.token)
                setIsLoggedIn(true)
            }
        }

    }}>
        <h1>{Capitalize(params.method)} Page</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' onChange={(event)=>{
            setUsername(event.target.value)
            }}></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password'  onChange={(event)=>{
            setPassword(event.target.value)
            }}></input>
        <button>Submit</button>
    </form>
    )
}

export default Authentication;


import React, {useState, useContext, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { Capitalize } from "../utils/helper";
import { UserContext } from '../context/UserContext'
import {register, login} from '../utils/apiClient'
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles({
    page:{
        display:'flex',
        flexFlow:'column',
        alignItems:'center'
    },
})

const Authentication = () =>{
    const history = useHistory()
    const params = useParams()
    const classes = useStyles()

    const {isLoggedIn, setIsLoggedIn, setUserToken, setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    useEffect(async ()=>{
        if (isLoggedIn===true){
            // sends the user back to home when signed in. 
            history.push("/home")
        }
    }, [isLoggedIn])

    return(
        <div>
    <Typography variant='h3'>{Capitalize(params.method)}</Typography>
    <form className={classes.page}onSubmit={async event=>{
        event.preventDefault()
        if (params.method=='register') {
            const registerData = await register({username:username, password:password})
            if(registerData && !registerData.name) {
                localStorage.setItem("userToken", registerData.token);
                setUserToken(registerData.token)
                setIsLoggedIn(true)
                setUser(username)
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
                setUser(username)
            }
        }

    }}>
        <TextField variant="outlined"  label='Username' type='text' id='username' name='username' onChange={(event)=>{
            setUsername(event.target.value)
            }}/>
        <br/>
        <TextField variant="outlined" label='Password' type='password' id='password' name='password'  onChange={(event)=>{
            setPassword(event.target.value)
        }}/>
        <br/>
        <button>Submit</button>
    </form>
    </div>
    )
}

export default Authentication;


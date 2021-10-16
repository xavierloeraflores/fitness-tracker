import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {login, register, getMe} from '../utils/apiClient'


function Test() {
    const {userToken, setUserToken, setIsLoggedIn} = useContext(UserContext)

    return (
        <>
        <br/>
        <button onClick={async ()=>{
            const registerData = await register({username:'Testing', password:'password'})
            console.log(registerData)
            if(registerData) {
                setUserToken(registerData.token)
                setIsLoggedIn(true)
            }

            }}>Register</button>
        <br/>
        <button onClick={async ()=>{
            const loginData = await login({username:'sandra', password:'sandra123'})
            console.log(loginData)
            if (loginData) {
                setUserToken(loginData.token)
                setIsLoggedIn(true)
            }
            }}>Sign In</button>
        <br/>
        <button onClick={async ()=>{
            const profileData = await getMe(userToken)
            console.log(profileData)
            }}>Profile</button>
        <br/>
        </>
    )
}

export default Test
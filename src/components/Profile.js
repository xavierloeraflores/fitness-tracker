import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/UserContext'
import { useHistory} from 'react-router-dom'
import { getMe} from '../utils/apiClient'

function Profile() {
    const history = useHistory()
    const {userToken, isLoggedIn} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [id, setId] = useState('')
    
    useEffect(async ()=>{
        if(!isLoggedIn){
            history.push('/home')
        }else{
            const user= await getMe(userToken)
            if (user){
                setUsername(user.username)
                setId(user.id)
            }

        }
    }, [isLoggedIn])



    return (
        <div>
            <span>{username? `Username:${username}`:null}</span>
            <span>{id? `User Id #:${id}`:null}</span>
            
        </div>
    )
}

export default Profile

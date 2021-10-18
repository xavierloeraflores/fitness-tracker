import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/UserContext'
import { useHistory} from 'react-router-dom'
import { getMyRoutines} from '../utils/apiClient'
import Routine from './Routine'
import { Typography } from '@material-ui/core'

function MyRoutines() {
    const history = useHistory()
    const {userToken, isLoggedIn} = useContext(UserContext)

    const [routines, setRoutines] = useState([])
    
    useEffect(async ()=>{
        if(!isLoggedIn){
            history.push('/home')
        }else{
            const userRoutines= await getMyRoutines(userToken)
            if (userRoutines){
                setRoutines(userRoutines)
                console.log(userRoutines)
            }

        }
    }, [isLoggedIn])
    return (
        <div>
        <Typography variant='h3'>My Routines</Typography>
            {routines.map((routine, idx)=>{
                return <Routine routine={routine} key={idx}/>
            })}
        </div>
    )
}

export default MyRoutines

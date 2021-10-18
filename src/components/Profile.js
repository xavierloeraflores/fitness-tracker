import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/UserContext'
import { useHistory} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getMe} from '../utils/apiClient'
import { Typography, Icon, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

    card: {
      display: "flex",
      flexFlow:'column',
      alignItems:'center',
      width:'300px',
        }
  });
  
  
const Profile=()=>{
    const classes = useStyles();
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
        <Card className={classes.card}>
            <AccountCircleIcon fontSize='large' />
            <Typography variant='h5'>{username? `Username:${username}`:null}</Typography>
            <Typography variant='h5'>{id? `User Id #:${id}`:null}</Typography>
            
        </Card>
    )
}

export default Profile

import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Typography, AppBar, makeStyles } from "@material-ui/core";
import { UserContext } from './context/UserContext';



const useStyles = makeStyles({
    
    link:{
        color:'white',
        textDecoration:'none',
        margin:'1rem'
    }
})

const Nav = () => {
    const classes = useStyles()
    const {setUser, isLoggedIn, setIsLoggedIn, setUserToken} = useContext(UserContext)
    const logOut = () => {
        setIsLoggedIn(false)
        setUser('')
        setUserToken('')
        localStorage.setItem('userToken', '')
    }

    return (
        <AppBar id='nav'>
            <Typography  variant='h4'>FitnessTracker</Typography>
            <Typography variant='h5' id='nav-links'>
                <Link className={classes.link} to = '/'>Home</Link>
                <Link className={classes.link} to = '/activities'>Activities</Link>
                <Link className={classes.link} to = '/routines'>Routines</Link>

                {
                    isLoggedIn ? (<>
                    <Link className={classes.link} to = '/myRoutines'>My Routines</Link>
                    <Link className={classes.link} to = '/profile'>Profile</Link>
                    <Link className={classes.link} to = '/' onClick={logOut}>Log Out</Link>
                    </>): (<>
                            <Link className={classes.link} to = '/user/login'>Log In</Link>
                            <Link className={classes.link} to = '/user/register'>Register</Link>
                        </>)
                }
            </Typography>
        </AppBar>
    )
}

export default Nav;
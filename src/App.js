import React, {useContext, useEffect}  from 'react'
import { Route } from 'react-router';
import { UserContext } from './context/UserContext';
import Authentication from './components/Authentication';
import Activities from './components/Activities'
import Routines from './components/Routines'
import Profile from './components/Profile'
import MyRoutines from './components/MyRoutines'
import Home from './components/Home'
import Test from './components/Test'
import { makeStyles, Paper } from "@material-ui/core";
import {getMe} from './utils/apiClient'

const useStyles = makeStyles({

    App: {
      display: "flex",
      flexFlow:'column',
      alignItems:'center',
      width:'80vw',
      minHeight:'75vh',
      padding:'1rem'
        }
  });
    
const App = ()=>{
      const classes = useStyles();
      const {setUserToken, setIsLoggedIn }= useContext(UserContext)

    useEffect(async ()=>{
        if(localStorage.getItem('userToken')!=''){
            const user = await getMe(localStorage.getItem('userToken'))
            console.log('logggg', localStorage.getItem('userToken'))
            if(user.username){
                setUserToken(localStorage.getItem('userToken'))
                setIsLoggedIn(true)
            }else{
                localStorage.setItem('userToken', '')
                setIsLoggedIn(false)
            }
        }
    }, [])


    return(
        <Paper elevation={3} className={classes.App}>

            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/profile'>
                <Profile/>
            </Route>
            <Route path='/user/:method'>
                <Authentication/>
            </Route>
            <Route path='/activities'>
                <Activities/>
            </Route>
            <Route path='/routines'>
                <Routines/>
            </Route>
            <Route path='/myroutines'>
                <MyRoutines/>
            </Route>
            <Test />

        </Paper>
    )
}

export default App;
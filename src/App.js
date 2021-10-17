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


const App = ()=>{
    const {setUserToken, setIsLoggedIn }= useContext(UserContext)

    useEffect(()=>{
        if(localStorage.getItem('userToken')!=''){
            setUserToken(localStorage.getItem('userToken'))
            setIsLoggedIn(true)
        }
    }, [])


    return(
        <>

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

        </>
    )
}

export default App;
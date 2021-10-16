import React, {useContext, useEffect}  from 'react'
import { Route } from 'react-router';
import Authentication from './components/Authentication';
import Activities from './components/Activities'
import Routines from './components/Routines'
import Profile from './components/Profile'
import MyRoutines from './components/MyRoutines'
import Home from './components/Home'
import Test from './components/Test'


const App = ()=>{


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
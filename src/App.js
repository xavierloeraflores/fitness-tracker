import React, {useContext, useEffect}  from 'react'
import { Route } from 'react-router';
import Authentication from './components/Authentication';


const App = ()=>{


    return(
        <>
            <Route exact path='/'>
                HOME
            </Route>
            <Route exact path='/profile'>
                {/* <Profile/> */}
            </Route>
            <Route path='/user/:method'>
                <Authentication/>
            </Route>
            <Route path='/user/:method'>
                Register
            </Route>
        </>
    )
}

export default App;
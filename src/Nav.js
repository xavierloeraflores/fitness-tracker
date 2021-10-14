import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';


const Nav = () => {

    const {setUser, isLoggedIn, setIsLoggedIn} = useContext(UserContext)
    const logOut = () => {
        setIsLoggedIn(false)
        setUser()
        
        localStorage.setItem('userToken', '')
    }

    return (
        <div id='nav'>
            <span>FitnessTracker</span>
            <div id='nav-links'>
                <Link className='nav-link' to = '/'>Home</Link>
                <Link className='nav-link' to = '/profile'>Profile</Link>
                {
                    isLoggedIn ? <Link className='nav-link' to = '/' onClick={logOut}>Log Out</Link>: (<>
                            <Link className='nav-link' to = '/user/login'>Log In</Link>
                            <Link className='nav-link' to = '/user/register'>Register</Link>
                        </>)
                }
            </div>
        </div>
    )
}

export default Nav;
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import App from "./App";
import Footer from "./Footer";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core";
import './styles.css'


const useStyles=makeStyles({
    site:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'space-evenly',
        backgroundColor:'#e8eaf6'
    }
})
const Index = ()=>{
    const classes= useStyles()
    return(
        <BrowserRouter>
            <UserProvider >
                <div className={classes.site}>
                    <Nav />
                    <App />
                    <Footer />
                </div>
            </UserProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Index />, document.getElementById('app'))









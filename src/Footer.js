import React from "react";
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    footer:{
        backgroundColor:'#c5cae9',
        width:'100vw',
        bottom:'0',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    }
})
const Footer = ()=>{

const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Typography >
                Footer
            </Typography>
        </footer>
    )
}

export default Footer;
import React,{useContext, useState} from 'react'
import { Typography, Accordion, Button, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {UserContext} from '../context/UserContext'
import { useEffect } from "react";
import { useHistory } from 'react-router';
import { deleteRoutine } from '../utils/apiClient';

const Activity =(activity)=>{
    const {id, creatorId, isPublic, duration, name, goal, count} = activity.activity
    return(
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
                <Typography variant='h6'>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body1'>
                    {goal}<br/>
                    Count:{count}<br/>
                    {duration}s
                    </Typography>
            </AccordionDetails>



        </Accordion>
    )
    
}

const Routine=(routine)=>{
    console.log('sussy', routine)
    const history = useHistory()
    const [isOwner, setIsOwner]= useState(true)
    const {user}= useContext(UserContext)
    const {id, creatorId, isPublic, name, goal, creatorName, activities} = routine.routine
    
    useEffect(()=>{
        console.log('xxx',user, creatorName)
        if (creatorName==user){
            setIsOwner(true)
        }else{
            setIsOwner(false)
        }
    })
    const _deleteRoutine = async()=>{
        const deletedRoutine = await deleteRoutine(localStorage.getItem('userToken'), id)
        if (deletedRoutine){
            history.go(0)
        }
    }
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
                <Typography variant='h5'><b>{name}</b></Typography>
                <Typography variant='h6'>@{creatorName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body1'>{goal}</Typography>
                {isOwner?(<div>
                    <Button onClick={_deleteRoutine}>Delete</Button>
                    <Button>Edit</Button>
                </div>):null}
            </AccordionDetails>
            {activities.map((activity, idx)=>{
                return <Activity activity={activity} key={idx}/>
            })}
        </Accordion>
    )
}

export default Routine

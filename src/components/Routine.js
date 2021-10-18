import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    
    const {id, creatorId, isPublic, name, goal, creatorName, activities} = routine.routine
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
            </AccordionDetails>
            {activities.map((activity, idx)=>{
                return <Activity activity={activity} key={idx}/>
            })}
        </Accordion>
    )
}

export default Routine

import React, {useState, useEffect} from 'react'
import { getAllActivities } from '../utils/apiClient'
import Activity from './Activity'
import { Typography } from '@material-ui/core'

function Activities() {

    const [activities, setActivities] = useState([])
    
    useEffect(async ()=>{
        const _activities= await getAllActivities()
        if (_activities){
            setActivities(_activities)
            console.log(_activities)
        }

        
    }, [])
    return (
        <div>
            <Typography variant='h3'>Activities</Typography>
            {activities.map((activity, idx)=>{
                return <Activity activity={activity} key={idx}/>
            })}
        </div>
    )
}

export default Activities

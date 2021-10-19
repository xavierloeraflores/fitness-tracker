import React, {useState, useContext, useEffect} from 'react'
import { getAllRoutines } from '../utils/apiClient'
import Routine from './Routine'
import { Typography } from '@material-ui/core'

function Routines() {

    const [routines, setRoutines] = useState([])
    
    useEffect(async ()=>{
        const _routines= await getAllRoutines()
        if (_routines){
            setRoutines(_routines)
            console.log(_routines)
        }

        
    }, [])
    return (
        <div>
            <Typography variant='h3'>Routines</Typography>
            {routines.map((routine, idx)=>{
                return <Routine routine={routine} key={idx}/>
            })}
        </div>
    )
}

export default Routines

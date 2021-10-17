import React, {useState, useEffect} from 'react'
import { getAllRoutines } from '../utils/apiClient'
import Routine from './Routine'

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
            {routines.map((routine, idx)=>{
                return <Routine routine={routine} key={idx}/>
            })}
        </div>
    )
}

export default Routines

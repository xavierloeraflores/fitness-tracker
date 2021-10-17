import React from 'react'

const Activity =(activity)=>{
    const {id, creatorId, isPublic, duration, name, goal, count} = activity.activity
    return(
        <>
            <span>{name}</span>
            <span>{goal}</span>
            <span>{count}</span>
            <span>{duration}</span>
            <span>------</span>



        </>
    )

}


export default Activity

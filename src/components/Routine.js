import React from 'react'

const Activity =(activity)=>{
    const {id, creatorId, isPublic, duration, name, goal, count} = activity.activity
    return(
        <>
            <span>{name}</span>
            <span>{goal}</span>
            <span>{count}</span>
            <span>{duration}</span>



        </>
    )

}

const Routine=(routine)=>{
    console.log('sussy', routine)
    
    const {id, creatorId, isPublic, name, goal, creatorName, activities} = routine.routine
    return (
        <>
        <span><b>{name}</b></span>
        <span>{creatorName}</span>
        <span>{goal}</span>
        <span>---</span>
        {activities.map((activity, idx)=>{
            return <Activity activity={activity} key={idx}/>
        })}
        </>
    )
}

export default Routine

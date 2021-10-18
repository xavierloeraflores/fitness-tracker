import React from 'react'
import { Typography, Card, CardContent } from "@material-ui/core";

const Activity =(activity)=>{
    const {id, creatorId, isPublic, name, description} = activity.activity
    return(
        <Card>
            <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>

    )

}


export default Activity

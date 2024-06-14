import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function UserCard({user}) {
  return (
    <Card sx={{maxWidth: 345, display: 'flex', justifyContent: 'center'}}>
      
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {user.name}
        </Typography>
        <Typography variant='body2' color='text.primary'>
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard
import React,{ useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Grid, } from '@mui/material'
import axios from 'axios'

const Dashboard = () => {
  var[dash,setDash]=useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data)
            setDash(response.data)
    })
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={2} style={{ padding: '20px' }}>
        {dash.map((val) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
            <Card>
              <CardMedia
                component="img"
                alt={val.title}
                height="200"
                image={val.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">{val.title}</Typography>
                <Typography variant="h6" color="text.error">Category: {val.category}</Typography>
                <Typography variant="body2" color="text.secondary">{val.description.substring(0, 100)}...</Typography>
                <Typography variant="h6" color="text.primary">${val.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Dashboard
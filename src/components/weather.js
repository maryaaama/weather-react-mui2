import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export default function Weather(props) {
  

   const getWeather=()=>{
    console.log('تابع اجرا شد');
    
    }

  if (props){
 
    return (
      
      <Container maxWidth='xs' style={{display:'block', marginTop:0 , marginRight:50, marginLeft:50}}>
        <Card sx={{ minWidth: 100 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {'Climatic condition:'}
            </Typography>
            <Typography variant="h5" component="div">
              {props.name}{bull}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.weather[0].description}
            </Typography>
            <Typography variant="body2">
           "Temp - " +{ props.main.temp} + "<sup>°C</sup>";
              <br />
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={getWeather}>close</Button>
          </CardActions>
        </Card>
      </Container>  
      )
      
    }
  
}

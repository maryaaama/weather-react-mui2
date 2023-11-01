
import './App.css';
import GetCountry from './components/GetCountry';
import GetCountry1 from './components/GetCountry1';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
    <GetCountry></GetCountry> 
     </Grid>
     <Grid item xs={8}>
    <GetCountry1></GetCountry1>
    </Grid>
    </Grid>
    </div>
  );
}

export default App;

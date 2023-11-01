import * as React from 'react';
import {useEffect, useState} from 'react';
import Weather from './weather';
import './GetCountry.css';

export default function GetCountry() {

    
    
  
  const [value, setValue] = useState('iran');
  const[submitted , setSubmitted] =useState(false);
  const [air,setAir]=useState(
    {name:"Iran",
    weather:[{description:"broken clouds"}],
    main:{temp:25.02},
  }
  );

  function getCountry (event){
   
   setValue(event.target.value);
   
   }
  
     useEffect(() => {
      console.log('value:'+value); 
      if(submitted){
      getCountries(value);}
      setSubmitted(false)
     },[submitted])

     async function getCountries(value){await
      fetch('https://api.openweathermap.org/data/2.5/weather?q='
      +value+
      '&units=metric&appid=50a7aa80fa492fa92e874d23ad061374')
      .then(response => response.json())
      .then(data =>{ 
      setAir(data);
      console.log(data);
     
                  })
                }

   function onSubmitHandler(event){
     event.preventDefault();
     setSubmitted(true);
     
}  
    
     return (

       <>
  
  <div className="form-control">
  <form onSubmit={(value)=>onSubmitHandler(value)} className='formValid'> 
  <label for="my-input" className='my-input'>country name</label>
  <input id="my-input" aria-describedby="my-helper-text" value={value} onChange={(event)=>getCountry(event)}/>
  <button id="my-helper-text" className='my-button'>submit</button>
  </form> 
  </div>

    
    <Weather {...air} ></Weather>
   
      
     
    </>
  )}
  
    
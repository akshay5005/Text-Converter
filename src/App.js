
import React , { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Text from './Text';



function App() {
  const [mode, setMode]=useState('light');
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
  }
  else{
    setMode('light');
  }

 }
  return (
   <>
   <Navbar heading="Text_Converter" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <Text/>
   </div>

   </>
    
  );
}

export default App;

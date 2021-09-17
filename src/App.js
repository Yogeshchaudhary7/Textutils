import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";



function App() 
{
  const [alert, setalert] = useState(null)
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not 
  const toggleMode=()=>
    {
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#384958';
        showAlert("Dark mode has been enabled","success")
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success")
      }
      // setInterval(() => {
      //   document.title="TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils";
      // }, 1500);
      // CHAMKANEY KE LIYE TITLE KO :P
    }
    
  const showAlert =(message,type)=>{
  setalert
  (
    {
    msg:message,
    type:type
    }
  )
  setTimeout(()=> 
  {
    setalert(null);
  }, 2000);


}  
return (
    <>
      {/* here we have made a component (Navbar in which we can change the title name) */}
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        
      {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
         
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>

      </Switch> */}

      
      {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

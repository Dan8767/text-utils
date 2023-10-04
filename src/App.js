import './App.css';
// import About from './components/About';
import Navbar from "./components/navbar";
import FormText from './components/FormText';
import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#052a4b'
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("White mode enabled","success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
    setAlert(null)
     }, 1500);
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
    <FormText mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;

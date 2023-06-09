import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({} as any)

  useEffect(()=>{
    console.log("here")
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>{getMessage.status === 200 ? 
          <div>
            <h3>{getMessage.data.age}</h3>
            <h3>{getMessage.data.name}</h3>
            <h3>{getMessage.data.occupation}</h3>
            <h3>{getMessage.data.aspiration}</h3>
            <h3>{getMessage.data.summary}</h3>
            <img src ="{getMessage.data.occupationImage}"></img>
          </div>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;

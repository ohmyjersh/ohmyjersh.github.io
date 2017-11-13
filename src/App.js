import React, { Component } from 'react';
import Resume from './Resume';
import './App.css';



class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#fff", minHeight:"100vh", fontFamily: "Roboto, sans-serif", width: "800px", margin: "0 auto", boxSizing: "border-box"}}> 
        <Resume />
      </div>
    );
  }
}

export default App;

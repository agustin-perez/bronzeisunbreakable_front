import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Status from './Pages/Status/Status';
import Changelog from './Pages/Changelog/Changelog';
import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
        <Navbar root="/"/>
          <div className="router">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/status' element={<Status/>}/>
                <Route path='/changelog' element={<Home/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
} 

export default App;
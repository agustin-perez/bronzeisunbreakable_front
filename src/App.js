import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Status from './Pages/Status/Status';
import Changelog from './Pages/Changelog/Changelog';
import Discord from './Components/Discord/Discord';
import './App.css';

const App = ( props ) => {
    return(
      <Router>
        <div className="App">
        <Navbar root='/' open={false}/>
          <div className="router">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/status' element={<Status/>}/>
                <Route path='/changelog' element={<Changelog/>}/>
            </Routes>
          </div>
          <Discord source={"https://discord.com/widget?id=721194078167105546&theme=dark"}/>
        </div>
      </Router>
    )
} 

export default App;
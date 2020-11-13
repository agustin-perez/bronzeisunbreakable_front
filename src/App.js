import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/status' component={Status}/>
                <Route path='/changelog' component={Changelog}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
} 

export default App;
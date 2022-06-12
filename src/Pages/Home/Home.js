import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    state = {
        titulo: "l0svirgosdelautu",
    }
    
    render(){
        return(
            <div className="homeWrapper">
                <div className="main">
                    <p>Página en construcción!<br></br> 
                        Server de Minecraft</p>
                </div>
            </div>
        )
    }
}

export default Home;
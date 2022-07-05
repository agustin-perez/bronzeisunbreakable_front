import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    state = {
        isLoading: true
    }

    async componentDidMount(){
        let response = await fetch('https://api.bronzeisunbreakable.me/pages/home');
        let jsonResponse = await response.json();
        this.setState({ homePage: jsonResponse, isLoading: false });
    }
    
    render(){

        document.title="Inicio";
        if(this.state.isLoading){
            return(
                <div className="HomeWrapper">
                    <h1>Cargando datos de API...</h1>
                </div>
            )
        }
        
        return(
            <div className="HomeWrapper">
                <h1>{this.state.homePage.maintitle}</h1>
                <h2>{this.state.homePage.subtitle}</h2>
                <p>{this.state.homePage.body}</p>
            </div>
        )
    }
}

export default Home;
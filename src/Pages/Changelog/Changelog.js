import React, { Component } from 'react';
import Cards from './Components/Cards';
import './Changelog.css';

class Changelog extends Component{
    state = {
        isLoading: true
    }

    async componentDidMount(){
        let response = await fetch('https://api.bronzeisunbreakable.me/pages/changelog');
        let jsonResponse = await response.json();
        this.setState({ changelogCards: jsonResponse, isLoading: false });
    }
    
    render(){

        document.title="Changelog";
        if(this.state.isLoading){
            return(
                <div className="Changelog">
                    <h1>Cargando datos de API...</h1>
                </div>
            )
        }

        let cardArray = (
            <div>
                {this.state.changelogCards.sort((a, b) => a.id < b.id).map((card) => {
                    console.log(card);
                return <Cards {...card}/>
                })}
            </div>
        );
        
        return(
            <div className="Changelog">
                {cardArray}
            </div>
        )
    }
}

export default Changelog;
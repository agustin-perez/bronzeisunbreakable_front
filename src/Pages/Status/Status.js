import React, { Component } from 'react';
import StatusCard from './StatusCards/StatusCards';
import './Status.css';

class Status extends Component{
    state = {
        serverstatus:[
            {"ip":"","port":"","debug":{"ping":false,"query":false,"srv":false,"querymismatch":false,"ipinsrv":false,"cnameinsrv":false,"animatedmotd":false,"cachetime":0,"apiversion":2},"hostname":"","online":false, "motd":{"raw":[""],"clean":[""],"html":[""]}, "players":{online:0, max:255}}
        ],
        title: "Status",
        isLoading: true
    }
    

    async componentDidMount(){
        let response = await fetch('https://api.mcsrvstat.us/2/l0svirgosdelautu.me');
        let jsonResponse = await response.json();
        this.setState({ serverstatus: jsonResponse, isLoading: false });
    }
    
    render(){

        document.title=this.state.title;

        if(this.state.isLoading){
            return(
                <div className="Status">
                    <h1>Cargando datos de API...</h1>
                </div>
            )
        }
        
        return(
            <div className="Status">
                <div className="StatusContainer">
                    <h1>Estado del server</h1>
                    <StatusCard title={this.state.serverstatus.motd.clean} text={this.state.serverstatus.online ? ("Online") : ("Problemas de conexión actualmente")} serverity={this.state.serverstatus.online ? ("normal") : ("critical")}/>
                    <StatusCard title={"Jugadores"} text={this.state.serverstatus.players.online+" / "+this.state.serverstatus.players.max}/>
                    <p>Versión: {this.state.serverstatus.version+" / Server software powered by: "+this.state.serverstatus.software}</p>
                    <p>Special thanks to mcsrvstat.us</p>
                </div>
            </div>
        )
    }
}

export default Status;
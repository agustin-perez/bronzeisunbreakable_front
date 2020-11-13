import React, { Component } from 'react';
import { generator } from 'uigradients';

class Status extends Component{
    state = {
        serverstatus:[
            {"ip":"","port":"","debug":{"ping":false,"query":false,"srv":false,"querymismatch":false,"ipinsrv":false,"cnameinsrv":false,"animatedmotd":false,"cachetime":0,"apiversion":2},"hostname":"","online":false, "motd":{"raw":[""],"clean":[""],"html":[""]}}
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
        let showstatus="offline";
        if(!this.state.isLoading && this.state.serverstatus.online){
            showstatus="online";
        }


        
        return(
            <div className="homeWrapper">
                <div className="main">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Estado del server: {showstatus}</p>
                    <p>Tirame un ataque: {this.state.serverstatus.ip}</p>
                </div>
            </div>
        )
    }
}

export default Status;
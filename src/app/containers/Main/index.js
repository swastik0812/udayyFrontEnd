import React,{Component} from "react";
import Navigation from "../../component/NavigationBar/Navigation"
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

class MainPage extends Component{
    state={
        url1:"",
        url2:"",
    }

    setUrl1 =(data)=>{
        this.setState({url1:data});
    }
    setUrl2 =(data)=>{
        this.setState({url2:data});
    }

    render(){
        return(<div>
            <div>
                <Navigation  set1={this.setUrl1} set2={this.setUrl2}/>
            </div>
        <Grid container spacing={0} style={{backgroundColor:"white",minHeight:600}}>
        <Grid item xs={6}  style={{borderRight:"solid",borderRightColor:"black"}} >
        <iframe  src ={this.state.url1 != "" ?this.state.url1:null } width="100%" height="100%">
        </iframe>
        
            </Grid>
        <Grid item xs={6}   >
        <iframe  src ={this.state.url2 != "" ?this.state.url2:null } width="750" height="600">
        </iframe>
            </Grid>
            </Grid>
        </div>)
    }
}

export default MainPage;
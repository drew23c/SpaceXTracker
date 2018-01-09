import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Style from './Style.css'


class App extends React.Component{
  constructor(){
    super();
    this.state ={
    }
  }
  componentDidMount(){
    this.getRocket();
  }
  getRocket = () =>{    
    console.log('clicked')
    axios
      .get('https://api.spacexdata.com/v2/launches/latest')
      .then(response=>{
        this.setState({
          rName:response.data.rocket.rocket_name,
          rType:response.data.rocket.rocket_type,
          ldl:response.data.launch_date_local,
          lSite:response.data.launch_site.site_name_long,
          det:response.data.details,
          flNum:response.data.flight_number,
          lnchY:response.data.launch_year,
        })
      })
  }
  render(){
    const styles={
      div:{
        color:'red'
      }
    }
    const BodyStyle = props => (
      <div className='body'>{props.children}</div>
    )

    const {rName,rType,ldl,lSite,det,flNum,lnchY} = this.state
    return(
      <div style={styles.div}>
      <BodyStyle>
        <center><h1>SpaceX Tracker</h1></center>
        <p><b>Flight Number:</b> {flNum}</p>
        <p><b>Launch Year:</b> {lnchY}</p>
        <p><b>Rocket Name: </b>{rName}</p>
        <p><b>Rocket Type: </b>{rType}</p>
        <p><b>Lauch Date Local: </b>{ldl}</p>
        <p><b>Lauch Site: </b>{lSite}</p>
        <p><b>Details: </b>{det}</p>
        <p><a style={styles.div} href="https://www.youtube.com/watch?v=0PWu3BRxn60"
        target={"_blank"}>Video</a></p>
        <p><a style={styles.div} href="https://www.reddit.com/r/spacex/comments/7li8y2/rspacex_iridium_next_4_official_launch_discussion/"
          target={"_blank"}>Reddit Launch</a></p>
      </BodyStyle>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import Header from './Header';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '10JzIuYobw3TNR5V1khOrLkNtd3A3ue5etCSALfi7Dwo',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
      
    return (
      <div className="App">
        <Header/>
        <h1 className="App-title">Details</h1>
        <div style={{marginTop:"50px"}}>
         
        <Table style={{width:"70%"}}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Starting Time</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Ending time</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Name of the Event</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Room Location</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
        {data.map((object) => (
            <TableRow >
              <TableCell component="th" scope="row">
                {object.StartingTime}
              </TableCell>
              <TableCell >{object.EndingTime}</TableCell>
              <TableCell >{object.NameoftheEvent}</TableCell>
              <TableCell >{object.RoomLocation}</TableCell>
            </TableRow>
        ))} 
        </TableBody>
      </Table>
      </div>
      
         
      
      </div>
    );
  }
}

export default App;
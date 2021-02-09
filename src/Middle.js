import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import {ThemeProvider} from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const theme1 = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        //This can be referred from Material UI API documentation.
        padding: "1px 1px",
        borderBottom: "none",

      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#F7F7F7",
    marginLeft: "245px",
   
  },
  content: {
    paddingLeft: "50px",
    paddingTop: "10px",
    marginTop: "70px",

    },
  font:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "14px",
 
  },
  dateUpper:{
          marginTop:"-20px",
          marginLeft:"860px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarRoot:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tableRoot:{
    width: '91%',
    height:'10%',
    overflowX: "auto",
    padding:"none"
  },
  
  table:{ 
    width:"100%",
  },
  table3:{
    width:"75%",
    marginLeft:"291px",
  },
  cell1:{
    color:"grey",
    fontSize:"0.7rem",
    lineHeight:"1.5",
    backgroundColor:"white",
    fontWeight:"bold",
    borderTop:"1px solid #F7F7F7",
    borderRight:"1px solid #F7F7F7",
    borderLeft:"2px solid #F7F7F7",
    borderBottom:"1px solid #F7F7F7"
  },
  cell2:{
    color:"#3AB6F4",
    fontWeight:"bold",
    fontSize:"0.7rem",
    lineHeight:"1.5",
    backgroundColor:"white",
    borderTop:"1px solid #E9E9E9",
    borderRight:"1px solid #E9E9E9",
    borderLeft:"1px solid #E9E9E9"
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    
    <div style={{backgroundColor:"white"}}>
         
    <ThemeProvider theme={theme1}>
    <div className={classes.root}>
        <main className={classes.content}>
        <Typography >
          
         <div style={{marginTop:"5px"}}> 
          {/* Table 1 */}
          <Paper size ='small' className={classes.tableRoot} style={{backgroundColor:"#F7F7F7 ",border:"transparent",boxShadow:"none",marginLeft:"80px",marginTop:"0px"}}>
          <ThemeProvider theme={theme1}>
          <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Dessert (100g serving)</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Calories</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Fat&nbsp;(g)</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Carbs&nbsp;(g)</TableCell>
            <TableCell component="th" scope="row" style={{color:"Black" ,fontWeight:"bold"}}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
                harsh
              </TableCell>
              <TableCell >2</TableCell>
              <TableCell >2</TableCell>
              <TableCell >6</TableCell>
              <TableCell >9</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      
      </ThemeProvider>
                </Paper>

    </div>
                  </Typography>
      </main>
    </div>
    
   
      <br/>
      <br/>
      <br/>
   </ThemeProvider>  
        
   </div>
  );
}


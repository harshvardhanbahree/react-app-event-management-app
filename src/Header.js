import { AppBar, Toolbar, makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
        height:"60px",
    paddingRight:"0px",
    position : "fixed",
    top: 0,
    backgroundColor:"lightgrey",
    overflow:"hidden",
    boxShadow:"none"
  },
  li1:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "30px",
    display:"inline",
    color: "Black",
  },
  
}));


export default function Header() {
  const { header } = useStyles();
  const {fonts} = useStyles();
  const {li1} = useStyles();

  const displayDesktop = () => {
    return <Toolbar>
      {femmecubatorLogo}
      {menus()}
    </Toolbar>;
  };

  const femmecubatorLogo = (
      <div>
          </div>
  );

  const menus = () => {
      return(
        
        <div style={{marginLeft:"10px"}}>
         <ul className = {fonts}>
                      <li className={li1}>Event Management System</li>                     
          </ul>                        
        </div>
      );
  };



  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
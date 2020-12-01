import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Gif from "./components/gi.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize:100,fontWeight:500,padding:50}}>
        <img src={Gif} alt="loading..."  />
        <span style={{color:"red"}}>Git</span>hub 
        <span style={{color:"red"}}> F</span>inder</p>
      </header>
      <Profile />
      <table border="0" width="100%" height="150px" bgcolor="black">
          <tr className="bottom" style={{color:"cyan",fontFamily:"Poiret One"}}>
            <td>Developed by Mukul Varshney</td>
          </tr><br/><br/>
          <tr  className="bottom" style={{color:"cyan",fontSize: 20,fontFamily:"Poiret One"}}>
          <td>Follow us:
            <a href={"https://www.instagram.com/mukul__79"}>  <i className="fab fa-instagram" style={{fontSize: 20}}> </i></a>
            <a href={"https://www.facebook.com/mukul.varshney.3597"}>  <i className="fab fa-facebook"style={{fontSize: 20}}></i></a>
          </td>
          </tr>
          <tr style={{color:"black" ,backgroundColor:"white"}}>
            <td><center><strong><footer>&copy; All Copyright Reserved 2020</footer></strong></center></td>
          </tr>
      </table>
</div>
  );
}

export default App;
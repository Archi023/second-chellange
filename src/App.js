import React from "react";
import "./index.css";

function App() {

let curDate = new Date();
curDate=curDate.getHours();
let message ="";
const cssStyle={};

if(curDate>=1 && curDate<11){
  message="Good Morning";
  cssStyle.color="blue";
  
}else if(curDate>=11 && curDate<19)
{
  message="Good Afternoon";
  cssStyle.color="orange";
  
}else{
  message="Good Night";
  cssStyle.color="black";
  
}
  return(
  <React.Fragment>
    <div className='card'>
    <h1 className='container'>Hello sir..<span style={cssStyle}>{message}</span></h1>
  </div>
  
 </React.Fragment>
  )
}

export default App;

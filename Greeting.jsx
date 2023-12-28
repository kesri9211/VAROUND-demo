import React from "react";
function Greeting(){
    let msg;
    let currDate=new Date();
    currDate=currDate.getHours();
    //creating object
    const cssStyle={};
    if(currDate>=4 && currDate<12){
    msg="Good morning";
    cssStyle.color="Orange";
    }
    else if(currDate>=12 && currDate<16){
    msg="Good afternoon";
    cssStyle.color="#efcc00";
    }
    
    else if(currDate>=16 && currDate<=20){
    msg="Good evening";
    cssStyle.color="Blue";
    }
    else{
    msg="Good Night";
    cssStyle.color="Red";
    }
    return(
        <h1 className="heading"><div style={cssStyle}>{msg}</div>Welcome To V-AROUND</h1>
    )
}
export default Greeting;

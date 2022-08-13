import React from "react";
function handleData(event){
    alert(` ${event.target.innerText.split(" ")[1]} ` )
}


const Five= (props)=>{
    return (
      
        <button className="btn" onClick={(event)=> handleData(event)}> {props.data.value} </button>
   
    )
}

export default Five;
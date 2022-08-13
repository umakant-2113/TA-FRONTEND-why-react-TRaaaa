 import React from "react";
 import { Component  } from "react";
 
 function handleData(event){
alert(`Hello ${ event.target.innerText}  `) 
}

const ThirdEvent=(props)=>{
    return (
        <>
     <div onClick={(event)=> handleData(event)}>
    <button className="btn" > Arya</button>
    <button  className="btn"> Jhon </button>
    <button  className="btn"> Bran </button>
    </div>
        </>
    )
}

export default ThirdEvent;

 function HTMLHeadingElement(event){
alert(`hello ${event.target.innerText}`)
}

  export class ThirdQus extends Component{
    render(){
        return (
            <div onClick={(event)=>HTMLHeadingElement( event)}>
                <button className="btn">Arya </button>
                <button  className="btn">John </button>
                <button  className="btn">Bran </button>
            </div>
        )
    }
}


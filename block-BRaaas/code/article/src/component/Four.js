import React from "react";
import Five from "./Five"
import data from "../data"



let Four =()=>{
return (
    <div>
        {data.map(elm=><Five key = {elm.id} data={elm }/>)}
    </div>
)
    

}

export default Four;
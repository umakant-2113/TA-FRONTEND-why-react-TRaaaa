import React from "react"
import Color,{ColorRed,Pink,Grape,Violet, Indigo,Gray,Cyan, Teal, Green, Lime,Yellow,Orange }   from "./Color";
import data from "../data/colors.json"

let arr2=[]

for(let key in data){
arr2.push(key)
}

const App =()=>{
    return (
        <>
        <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[6]}</p>
                <p className="name-color"> color.{arr2[6]}</p>
            </div>
      <div className="flex-80">
      <Color/>
      </div>
      </div>
   
     
      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[1]}</p>
                <p className="name-color"> color.{arr2[1]}</p>
            </div>
      <div className="flex-80">
      <ColorRed/>
      </div>
      </div>
    
       
      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[2]}</p>
                <p className="name-color"> color.{arr2[2]}</p>
            </div>
      <div className="flex-80">
      <Pink/>
      </div>
      </div>

    
      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[3]}</p>
                <p className="name-color"> color.{arr2[3]}</p>
            </div>
      <div className="flex-80">
      <Grape/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[4]}</p>
                <p className="name-color"> color.{arr2[4]}</p>
            </div>
      <div className="flex-80">
      <Violet/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[5]}</p>
                <p className="name-color"> color.{arr2[5]}</p>
            </div>
      <div className="flex-80">
      <Indigo/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[0]}</p>
                <p className="name-color"> color.{arr2[0]}</p>
            </div>
      <div className="flex-80">
      <Gray/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[7]}</p>
                <p className="name-color"> color.{arr2[7]}</p>
            </div>
      <div className="flex-80">
      <Cyan/>
      </div>
      </div>


      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[8]}</p>
                <p className="name-color"> color.{arr2[8]}</p>
            </div>
      <div className="flex-80">
      <Teal/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[9]}</p>
                <p className="name-color"> color.{arr2[9]}</p>
            </div>
      <div className="flex-80">
      <Green/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[10]}</p>
                <p className="name-color"> color.{arr2[10]}</p>
            </div>
      <div className="flex-80">
      <Lime/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[11]}</p>
                <p className="name-color"> color.{arr2[11]}</p>
            </div>
      <div className="flex-80">
      <Yellow/>
      </div>
      </div>

      <div className="big-box">
            <div className="flex-15">
                <p className="color-name">{arr2[12]}</p>
                <p className="name-color"> color.{arr2[12]}</p>
            </div>
      <div className="flex-80">
      <Orange/>
      </div>
      </div>
        </>
    )
}
export default App
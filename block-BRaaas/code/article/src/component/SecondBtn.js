

 function handleEvent(){
    alert(" To learn React use https://reactjs.org ")
    alert("React and ReactDOM works together")
    alert(" Babel helps in writing JSX")
}

const Second=()=>{
    return <button className="btn2" onClick={handleEvent}> How can I help you?</button>
}
export default Second;
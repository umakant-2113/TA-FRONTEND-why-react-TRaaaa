function handle(){
    alert( `Hello React Event`)
}

const Article =()=>{
    return (
        <>
        <button className="btn"   onClick={handle}>Click Me </button>
        </>
    )
}

export default Article;



function Article(props){
    return (
        <>
        <div className="flex">
        <img className="img" src={props.info.urlToImage}  alt="" width="100%" height="300px" />
        <h2 className="author">{props.info.author} </h2>
        <h3  className="title"> {props.info.title} </h3>

        <p  className="description">{props.info.description} </p>
        <p  className="content">{props.info.content} </p>
        <a  className="btn"  href={props.info.url}>  Read More </a>
        </div>
        </>
    )
}

export default Article
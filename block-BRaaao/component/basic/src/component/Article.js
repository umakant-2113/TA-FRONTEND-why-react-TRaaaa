
function Article(props) {
  return (
    <>
    <div className="flex-30">
    <img className="img"   src={props.articleInfo.urlToImage} alt="" width="100%" height="300px"  />
    <h3 className="title">{props.articleInfo.title} </h3>
    <h3 className="author">{props.articleInfo.author} </h3>
    <p className="content">{props.articleInfo.content}</p>
    <nav className="details">   <a href={props.articleInfo.url}>Know  More About</a></nav>
    </div>
    </>
  );
}

export default Article

export function Articles(props){
return props.data.map(article=> <Article articleInfo={article} />)    
}


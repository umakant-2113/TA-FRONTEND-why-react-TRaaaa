
import Article from "./Article"
import data from "../data/data";
import PropTypes from 'prop-types';
function Articles(){
    return  ( 
        <div className="big-div">
            { data.map(article=><Article key={article.author}   info={article} />) }
 
        </div>
        )
}

Article.PropTypes={
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
export default Articles
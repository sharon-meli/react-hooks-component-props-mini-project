import Article from "../components/Article";
import blogData from "../data/blog";

function ArticleList(){
    const list=blogData.posts.map(array=>{
        return <Article title={array.title} date={array.date} preview={array.preview}/>
    })
    return(
        <main>
          {list}
        </main>
    )
}
export default ArticleList;
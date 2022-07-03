import data from "../data"
import Post from "./Post"
function List(props){
    
    const mapped = data.map((looper, index)=>{
        return <Post
                title={looper.title}
                subTitle={looper.subTitle}
                author={looper.author}
                data={looper.date}
                />
    })
    
    return(
        <div>
            {mapped}
        </div>
    )
}
export default List
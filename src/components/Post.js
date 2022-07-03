
function Post(props){
    return(
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
          <h6>{props.author}</h6>
          <p>{props.date}</p>
        </div>
    )
}
export default Post
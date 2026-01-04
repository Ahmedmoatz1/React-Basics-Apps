export default function Posts({postName = "no title" ,postBody="no body"}){
    return(
        <div style={{padding: "10px", border:"solid teal 5px",margin:"25px"}}>
            <h2>{postName}</h2>
            <hr></hr>
            <p>{postBody}</p>
        </div>
    )
}
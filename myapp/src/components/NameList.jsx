import { useState, useEffect } from "react"
function NameList() {
   const [data, setData] = useState([])
   const [isLoading, setLoading] = useState([])
   useEffect(() => {
      setTimeout(() => {
         fetch("json/names.json")
         .then( (response) => response.json())
         .then( (json) => { console.log(json); setLoading(false); setData(json); } )
      }, 2000)
   })
   return (
      <div>
         {isLoading && <span>loading...</span>}
         {!isLoading && data && <span>Popular names: </span>}
         {!isLoading && data && data.map((item) =>
            <span key={item.id}>{item.name} </span>
         )}
      </div>
   )
}
export default NameList
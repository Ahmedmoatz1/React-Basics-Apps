import { useState } from 'react';
export default function HelloWorld() {
   const [name, setName] = useState("World")
   const [ahmed ,setahmed] = useState(22)
   
   return (
      <div style={{ textAlign: "center", padding: "5px" }}>
         <input id="name" name="name"
            value={name}
            value2 = { ahmed}
            onChange={(e) => {setName(e.target.value)
                setahmed(e.target.value)
            }}
             />
         <div>Hello {name}</div>
         
         <div>Hello {ahmed}</div>


      </div>
   )
}
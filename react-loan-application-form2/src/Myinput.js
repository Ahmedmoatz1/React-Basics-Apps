import { useContext } from "react";
import { Loaninputcontexts } from "./context/Loanformcontext";
export default function MyInput({value ,handlechange}){
   const MyInput = useContext(Loaninputcontexts)
   console.log(MyInput)
   return(<div>
        <label>Phone number: </label>
        
        <input
          type="number" placeholder="* Phdd one must contain exactly 12 digits"
          value={value}
          onChange={(event) =>{
            handlechange({ ...value, phone: event.target.value });
          }}
        /> 
    </div>)
}
import MyInput from "./Myinput";
export default function Mycomponents({value ,handlechange}){
    return( <>
    <h1>this is header</h1>
    <MyInput value={value} handlechange={handlechange}/>
        <h1>this is foter</h1>
        </>);
}
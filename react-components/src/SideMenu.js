import "./TagButtonStyle.css"
import Tagbutton from "./TagButton";
export default function SideMenu (){
    return(
        <div style={{margin:"25px auto", border:"solid teal 5px", display:'grid',gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", width:"300px " }}>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            <div style={{margin:" auto"}}><Tagbutton /></div>
            
        </div>
    );
}

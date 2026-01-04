import Posts from './Posts';
import './App.css';
import Header from './Header';
import TagButton from './TagButton';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display:"flex" , width:"70%" ,margin:"auto"}}>
      <div style={{width:"50%"}}>
      <Posts postName="Ahmed moatz" postBody ="frontend developer "/>
      <Posts postName="khaled mohamed" postBody ="backend developer "/>
      <Posts />
      </div >
      <div style={{width:"50%"}}>
      <TagButton/>
      </div>
      </div>
    </div>
  );
}

export default App;

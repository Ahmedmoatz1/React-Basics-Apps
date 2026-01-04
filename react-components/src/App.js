import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  return (
    <div className="App">
      <Header />
      {/* posts & side menu container */}
      <div style={{display:"flex", width:"70%", margin:"auto"}}>
        {/* posts container */}
        <div style={{width:"50%", margin:"25px auto "}}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div>
            <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Button from './Button';
import Gallery from './Gallery';
function App() {
  return (
    <div className="App">
      <Profile/>
      <Profile/>
      <Profile/>
      <hr></hr>
      <hr></hr>
      <Button message={"playing"}>olay movie</Button>
      <Button message={"upgrage"}>play movie</Button>
      <hr></hr>
      <Gallery/>
    </div>
  );
}

export default App;

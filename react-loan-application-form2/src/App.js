import { UserContext } from './context/UserContext';
import './App.css';
import LoarnForm from './LoarnForm';
import { Route , Routes } from 'react-router-dom';
function App() {
  // const title = 'Ahmed'
  return (
    <UserContext.Provider value={{userName:'gggg', email:"gg@gmail.com",name:"ggg ggg"}}>
    <div className="App">
      <LoarnForm />
      <Route>
        <Routes path="/hello" element={<h1>hello we</h1>}/>
      </Route>
    </div>
    </UserContext.Provider>

  );
}

export default App;

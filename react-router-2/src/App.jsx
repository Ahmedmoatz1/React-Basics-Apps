import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// صفحات بسيطة للتجربة
function Home() {
  return <h1>🏠 Home Page</h1>;
}

function Hello() {
  return <h1>👋 Hello Page</h1>;
}

function Posts() {

  return <h1>📝 Posts Page</h1>;

}

function App() {
  return (
    <div className="App">
      {/* ROUTES */}
      <div style={{ fontSize: "30px" }}>
        <Link to="/"><button style={{ fontSize: "30px" }}>Home</button></Link>
        <Link to="/hello"><button style={{ fontSize: "30px" }}>Hello</button></Link>
        <Link to="/posts"><button style={{ fontSize: "30px" }}>Posts</button></Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;

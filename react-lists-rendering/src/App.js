import Posts from './Posts';
import './App.css';
import Header from './Header';
import TagButton from './TagButton';

function App() {
  const postsData = [
    {
      id: 1,
      postName: "Ahmed Moatz",
      postBody: "Frontend Developer",
    },
    {
      id: 2,
      postName: "Khaled Mohamed",
      postBody: "Backend Developer Pro Max",
    },
    {
      id: 3,
      
    }
  ];

  const postList = postsData.map((post) => (
    <Posts postName={post.postName} postBody={post.postBody} key={post.id} />
  ));

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", width: "70%", margin: "auto" }}>
        <div style={{ width: "50%" }}>{postList}</div>
        <div style={{ width: "50%" }}>
          <TagButton />
        </div>
      </div>
    </div>
  );
}

export default App;

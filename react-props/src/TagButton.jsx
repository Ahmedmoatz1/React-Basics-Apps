import TagButton from "./Button";

export default function TagButtons() {
  return (
    <div
      style={{
        margin: "25px auto",
        border: "solid teal 5px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        width: "300px",
        padding:"30px"
      }}
    >
      <div style={{ margin: "auto" }}>
        <TagButton title="Welcome to Egypt">
            <div><span>😊😊😊😊😊</span></div>
        </TagButton>
      </div>
      <div style={{ margin: "auto" }}>
        <TagButton title="Welcome to شبرااااا" >
            <div><img style={{width:"100%"}} src="https://www.mobtada.com/resize?src=uploads/images/2023/08/16921533760.PNG&w=750&h=450&zc=0&q=70" alt="aaa" /></div>
        </TagButton>
      </div>
      <div style={{ margin: "auto" }}>
        <TagButton title="Welcome to Astonha City" />
      </div>
    </div>
  );
}

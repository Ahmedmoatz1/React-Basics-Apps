import TagButton from "./Button";

export default function TagButtons() {
  const Categories = [
    {
      id:1,
      title:"Welcome to Egypt",
      c: (            <div><img style={{width:"100%"}} src="https://www.mobtada.com/resize?src=uploads/images/2023/08/16921533760.PNG&w=750&h=450&zc=0&q=70" alt="aaa" /></div>
)
      
    },
    {
      id:2,
      title:"Welcome to شبرااااا",
      c: (<div><span>😊😊😊😊😊</span></div>)
      
    },
  ];
  const Categorieslist = Categories.map((categ)=>{
    return (<div style={{ margin: "auto" }}><TagButton title={categ.title} key={categ.id}>
      {categ.c}
    </TagButton></div>)
  })

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
    {Categorieslist}
      {/* <div style={{ margin: "auto" }}>
        <TagButton >
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
      </div> */}
    </div>
  );
}

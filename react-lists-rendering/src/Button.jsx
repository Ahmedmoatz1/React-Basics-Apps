import "./TagButtonStyle.css";

export default function TagButton({ title, children }) {
  return (
    <button style={{width:"100%" }} className="tagbutton">
      {title} {children}
    </button>
  );
}

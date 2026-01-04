import "./loarnForm.css";

export default function Model({ isvisible, errorMessage = null }) {
  if (!isvisible) return null;

  return (
    <div className="tagmodel">
      <div className="model">
        {errorMessage ? (
          <h1 className="error">{errorMessage}</h1>
        ) : (
          <h1>The form has been submitted successfully</h1>
        )}
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import "./loarnForm.css";
import Model from "./model";
import Mycomponents from "./Mycomponents";
import { UserContext } from "./context/UserContext";
import { Loaninputcontexts } from "./context/Loanformcontext";
export default function LoarnForm() {
   const userData = useContext(UserContext);
  const [errorMessage, seterrorMessage] = useState(null);
  const [showmodel, setshowmodel] = useState(false);
  const [loanInputs, setLoaninputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    sallary: "",
  });
  
  const btnIsDisabled =
    loanInputs.name.trim() === "" ||
    loanInputs.phone.trim() === "" ||
    loanInputs.age.trim() === "" ||
    loanInputs.sallary.trim() === "";

  const btnclass = btnIsDisabled ? "dissabled" : "sabled";

  function handleForm(event) {
    event.preventDefault();
    seterrorMessage(null);
    const { age, phone } = loanInputs;

    if (age < 18 || age > 100) {
      seterrorMessage("The age is not allowed");
    } else if (!/^\d{12}$/.test(phone)) {
      seterrorMessage("Phone number must be exactly 12 digits");
    }
    setshowmodel(true);
  }

  function handledivclick() {
    setshowmodel(false);
  }

  return (
    <div className="loarn" onClick={handledivclick}>
      <form onSubmit={handleForm}>
        <h1>{userData.name}</h1>
        <hr />
        
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) =>
            setLoaninputs({ ...loanInputs, name: event.target.value })
          }
        />
        <Loaninputcontexts.Provider value={{title : "hello"}}><Mycomponents/></Loaninputcontexts.Provider>
        

        <label>Phone number: </label>
        
        <input
          type="number" placeholder="* Phone must contain exactly 12 digits"
          value={loanInputs.phone}
          onChange={(event) =>
            setLoaninputs({ ...loanInputs, phone: event.target.value })
          }
        />
       

        <label>Age:</label>
        <input
          type="number"
          placeholder="* age must more than 18"
          value={loanInputs.age}
          onChange={(event) =>
            setLoaninputs({ ...loanInputs, age: event.target.value })
          }
        />

        <label>Are you an employee?</label>
        <input
          className="checkbox"
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) =>
            setLoaninputs({ ...loanInputs, isEmployee: event.target.checked })
          }
        />

        <label>Salary:</label>
        <select
          value={loanInputs.sallary}
          onChange={(event) =>
            setLoaninputs({ ...loanInputs, sallary: event.target.value })
          }
        >
          <option value="">Select salary range</option>
          <option value="low">Less than 500$</option>
          <option value="medium">Between 500$ and 2000$</option>
          <option value="high">Above 2000$</option>
        </select>

        <button type="submit" className={btnclass} disabled={btnIsDisabled}>
          Submit
        </button>
      </form>
      <Model isvisible={showmodel} errorMessage={errorMessage} />
    </div>
  );
}

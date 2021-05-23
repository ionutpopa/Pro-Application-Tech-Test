import { useState } from "react";
import { Redirect } from "react-router-dom";

const Form = (props) => {
  const [dataNasterii, setDataNasterii] = useState("");
  const [email, setEmail] = useState("");

  let is_logged_in = localStorage.getItem("is_logged_in");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { dataNasterii, email };
    if (user.dataNasterii === "" || user.email === "") {
      return;
    }
    
    let data = [];
    const oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData) {
      oldData.push(user);
      localStorage.setItem("data", JSON.stringify(oldData));
    } else {
      data.push(user);
      localStorage.setItem("data", JSON.stringify(data));
    }
    props.history.push("/");
  };

  return (
    <>
      {is_logged_in === "true" ? (
        <div className="container form-container">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Anul Nasterii</label>
              <input
                type="text"
                className="form-control"
                value={dataNasterii}
                onChange={({ target }) => setDataNasterii(target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Adresa de email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <br />
            <div className="submit-container">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Form;
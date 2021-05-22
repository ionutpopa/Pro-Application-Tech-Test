import Navbar from "./navbar";

const Logout = (props) => {
  const logoutUser = () => {
    localStorage.setItem("is_logged_in", "false");
    localStorage.removeItem("data")
    props.history.push("/");
  };
  return (
    <div>
      <Navbar />
      <div className="single-button">
        <button type="button" onClick={logoutUser} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;

import Navbar from "./navbar";

const Login = (props) => {
  const loginUser = () => {
    localStorage.setItem("is_logged_in", "true");
    props.history.push("/form");
  };
  return (
    <div>
      <Navbar />
      <div className="single-button">
        <button type="button" onClick={loginUser} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

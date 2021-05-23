import Navbar from "./navbar";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { logUser } from "../redux/actions"

const Login = (props) => {
  const dispatch = useDispatch()
  const loginUser = () => {
    localStorage.setItem("is_logged_in", "true");
    dispatch(logUser())
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

const mapStateToProps = (state) => {
  return {
    is_logged_in: state.data,
  };
};

export default connect(mapStateToProps)(Login);

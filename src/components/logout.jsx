import Navbar from "./navbar";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { logUser } from "../redux/actions"

const Logout = (props) => {
  const dispatch = useDispatch()
  const logoutUser = () => {
    localStorage.setItem("is_logged_in", "false");
    // localStorage.removeItem("data")
    dispatch(logUser(false))
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

const mapStateToProps = (state) => {
  return {
    is_logged_in: state.data,
  };
};

export default connect(mapStateToProps)(Logout);
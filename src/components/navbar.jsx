import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Pro Application Tech
          </Link>
          <ul className="navbar-nav flex">
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home"
import Login from "./components/login"
import Form from "./components/form"
import Logout from "./components/logout"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

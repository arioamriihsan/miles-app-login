import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { Login } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container">
      <div>This is Home Page</div>
      <Link to="/">
        <button>See Login Page</button>
      </Link>
    </div>
  );
};

const Register = () => {
  return (
    <div className="container">
      <div>This is Register Page</div>
      <Link to="/">
        <button>See Login Page</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
    </Fragment>
  );
};

export default App;

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/HeaderPages/Home";
import Dogs from "./pages/HeaderPages/Dogs";
import Sitters from "./pages/HeaderPages/Sitters";
import About from "./pages/HeaderPages/About";
import Register from "./pages/HeaderPages/Register";
import Login from "./pages/HeaderPages/Login";
import Logout from "./pages/HeaderPages/Logout";
import NotFound from "./pages/NotFound"

import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/Dogs">
          <Dogs />
        </Route>
        <Route path="/Sitters">
          <Sitters />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.min.css";

import Home from "./pages/HeaderPages/Home";
import Dogs from "./pages/HeaderPages/Dogs";
import Sitters from "./pages/HeaderPages/Sitters";
import About from "./pages/HeaderPages/About";
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";

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
        <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/sitters">
          <Sitters />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/forgetPassword">
          <ForgetPassword />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;

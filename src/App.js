import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.min.css";

import Home from "./pages/HeaderPages/Home";
import Dogs from "./pages/HeaderPages/Dogs";
import DogDetail from "./pages/DetailPages/DogDetail";
import Sitters from "./pages/HeaderPages/Sitters";
import SitterDetail from "./pages/DetailPages/SitterDetail";
import About from "./pages/HeaderPages/About";
import Message from "./pages/HeaderPages/Message";
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/dogs" exact>
          <Dogs />
        </Route>
        <Route path="/dogs/:dogId">
          <DogDetail />
        </Route>
        <Route path="/sitters" exact>
          <Sitters />
        </Route>
        <Route path="/sitters/:sitterId">
          <SitterDetail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/message">
          <Message />
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

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Sitters from "./pages/Sitters";
import About from "./pages/About";
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
        <Route path="/Dogs">
          <Dogs />
        </Route>
        <Route path="/Sitters">
          <Sitters />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;

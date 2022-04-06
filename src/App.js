import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import Nav from './components/Nav';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>{" "}
      </Switch>
    </div>
  );
}

export default App;

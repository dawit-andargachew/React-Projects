import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AddNew from "./components/AddNew";

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
        </Route>
        <Route path="/add">
          <AddNew></AddNew>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

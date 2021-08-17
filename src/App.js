import Nav from "./views/Nav";
import Location from "./components/Location";
import Poster from "./components/Poster";
import Products from "./views/Products";
import Footer from "./components/Footer";
// import Loading from "./components/Loading";
import Login from "./views/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { useState } from "react";

function App() {
  // const [isLoad, setIsLoad] = useState(false);
  // setTimeout(() => {
  //   setIsLoad(true);
  // }, 500);

  return (
    <Router>
      <>
        <div id="top"></div>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Poster />
            <Products />
            <Location />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;

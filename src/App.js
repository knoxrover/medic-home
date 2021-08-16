import Nav from "./views/Nav";
import Location from "./components/Location";
import Poster from "./components/Poster";
import Products from "./views/Products";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useState } from "react";

function App() {
  const [isLoad, setIsLoad] = useState(false);
  setTimeout(() => {
    setIsLoad(true);
  }, 1000);

  return (
    <>
      {!isLoad ? (
        <Loading />
      ) : (
        <div className="root">
          <div id="top"></div>
          <Nav />
          <Poster />
          <Products />
          <Location />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

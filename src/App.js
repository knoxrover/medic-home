import Nav from "./components/Nav";
import Location from "./components/Location";
import Poster from "./components/Poster";
import Products from "./views/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="top"></div>
      <Nav />
      <Poster />
      <Products />
      <Location />
      <Footer />
    </>
  );
}

export default App;

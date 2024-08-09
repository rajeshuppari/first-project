import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Shop from "./pages/Shop";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import men_banner from "../src/component/assets/photos/banner_mens.png";
import women_banner from "../src/component/assets/photos/banner_women.png";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<Mens image={men_banner}></Mens>}
          ></Route>
          <Route
            path="/womens"
            element={<Womens image={women_banner}></Womens>}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <br /> <br />
        <br /> <br />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

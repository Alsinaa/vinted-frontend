import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
// COMPONENTS
import Header from "./components/Header";
//PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [offer, setOffer] = useState();

  const handleOnClick = (elem) => {
    console.log("je suis clique sur l'offre");
    setOffer(elem._id);
  };
  const [token, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route
          path="/"
          element={<Home handleOnClick={handleOnClick} />}
        ></Route>
        <Route path="/offers/:id" element={<Offer />}></Route>
        <Route
          path="/signup"
          element={<Signup handleToken={handleToken} />}
        ></Route>
        <Route
          path="/login"
          element={<Login handleToken={handleToken} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

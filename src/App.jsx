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
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [offer, setOffer] = useState();
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState([0, 1000]);
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

  const handleOnClick = (elem) => {
    console.log("je suis clique sur l'offre");
    setOffer(elem._id);
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleOnClick={handleOnClick}
              search={search}
              sortPrice={sortPrice}
            />
          }
        />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;

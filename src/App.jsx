import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// COMPONENTS
import Header from "./components/Header";
//PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [offer, setOffer] = useState();

  const handleOnClick = (elem) => {
    console.log("je suis clique sur l'offre");
    setOffer(elem._id);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home handleOnClick={handleOnClick} />}
        ></Route>
        <Route path="/offers/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

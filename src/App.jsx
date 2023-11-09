import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// COMPONENTS
import Header from "./components/Header";
//PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState();

  const handleOnClick = (elem) => {
    console.log("je suis clique sur l'offre");
    setOffer(elem._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Loading...</span>
  ) : (
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

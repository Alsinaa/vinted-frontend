import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = ({ handleOnClick }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);
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
    <main>
      <div>
        <div className="hero">
          <img
            src="https://static.vinted.com/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg"
            alt=""
          />
        </div>
        <div className="img-container">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </div>
      <h2>Articles populaires</h2>
      <div className="offers">
        {data.offers.map((elem) => {
          // console.log(elem);
          return (
            <div>
              <Link to={`/offers/${elem._id}`} key={elem.id}>
                <div
                  className="offer-section"
                  onClick={() => {
                    handleOnClick(elem);
                  }}
                >
                  <p>{elem.owner.account.username}</p>
                  <img
                    className="img-offer"
                    src={elem.product_image.url}
                    alt=""
                  />
                  <p>{elem.product_name}</p>
                  <p>{elem.product_price}€</p>
                  <p>{elem.product_details[1].TAILLE} </p>
                  <p>{elem.product_details[0].MARQUE} </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;

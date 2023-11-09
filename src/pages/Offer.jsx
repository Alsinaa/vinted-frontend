import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(response.error);
      }
      fetchData();
    };
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <h2>test je suis sur la page de mon offre</h2>
      <img src={data.product_image.url} alt="" />
      <p>{data.product_price}€ </p>
      <Link to="/">Retour vers la page home</Link>
    </main>
  );
};
export default Offer;

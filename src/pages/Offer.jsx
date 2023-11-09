import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   console.log(data);

  const params = useParams();
  const id = params.id;
  //   console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(response.error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <Link to="/">Retour vers la page home</Link>
      <div>
        <div>
          <img src={data.owner.account.avatar.secure_url} alt="" />
          <span>{data.owner.account.username}</span>
        </div>
        <img src={data.product_image.url} alt="" />
        <p>{data.product_price}€ </p>
        {data.product_details.map((detail) => {
          //   console.log(detail);
          const clefs = Object.keys(detail);
          //   console.log(clefs);
          const clef = clefs[0];
          //   console.log(clef);
          return (
            <p key={clef}>
              {clef} : {detail[clef]}
            </p>
          );
        })}
        <p>{data.product_description} </p>
      </div>
    </main>
  );
};
export default Offer;

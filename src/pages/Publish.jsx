import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState({});
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [acceptExchange, setAcceptExchange] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("picture", picture);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return token ? (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="file-input">
            <h3>Vends ton article</h3>
            <label htmlFor="picture-input">Ajoute une photo</label>
            <input
              style={{ display: "none" }}
              id="picture-input"
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
            {/* {picture && (
              <img
                src={URL.createObjectURL(picture)}
                alt=""
                style={{ height: "140px" }}
              />
            )} */}
          </div>
          <div className="title-input">
            <p>Titre</p>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Décris ton article</p>
            <textarea
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Marque</p>
            <input
              type="text"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Taille</p>
            <input
              type="text"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Couleur</p>
            <input
              type="text"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Etat</p>
            <input
              type="text"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Lieu</p>
            <input
              type="text"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Prix</p>
            <input
              type="text"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <div className="checkbox-input">
              <input
                type="checkbox"
                name="exchange"
                id="exchange"
                value={acceptExchange}
                onChange={(event) => setAcceptExchange(event.target.value)}
              />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};
export default Publish;

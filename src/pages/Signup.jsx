import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("la@mail");
  const [username, setUsername] = useState("la");
  const [password, setPassword] = useState("azerty");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );

      handleToken(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="S'inscrire" />
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </main>
  );
};
export default Signup;

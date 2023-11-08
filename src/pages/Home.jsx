import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <h1>Je suis sur la page Home</h1>
      <Header />
      <Link to="/offers">lien vers la page offer</Link>
    </main>
  );
};

export default Home;

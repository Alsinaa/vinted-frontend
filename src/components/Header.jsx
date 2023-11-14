import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <img
          src="https://static.vinted.com/assets/web-logo/default/logo.svg"
          alt="logo"
        />
        <Link to="/" />
      </div>
      <div className="search-input">
        <input
          type="text"
          name="search-input"
          placeholder="Recherche des articles"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="buttons">
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              S'inscrire
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Se connecter
            </button>
          </div>
        )}
        <button
          onClick={() => {
            {
              token ? "/publish" : "/login";
            }
            navigate("/publish");
          }}
        >
          Vends tes articles
        </button>
      </div>
    </header>
  );
};
export default Header;

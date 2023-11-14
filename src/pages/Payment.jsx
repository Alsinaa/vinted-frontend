import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );

  const location = useLocation();
  console.log(location.state);

  const { price, title, protectCosts, shipping, totalPrice } =
    location.state || {};
  console.log({ price, title });

  return (
    <section className="payment">
      <div className="payment-container">
        <div className="payment-card resum">
          <h4>Résumé de la commande</h4>
          <div className="content">
            <p>
              Commande <span>{price} €</span>
            </p>
            <p>
              Frais protection acheteurs <span>{protectCosts} €</span>
            </p>
            <p>
              Frais de port <span>{shipping} €</span>
            </p>
          </div>
          <div>
            <p className="price">
              Total <span>{totalPrice} €</span>
            </p>
          </div>
        </div>

        <div className="payment-card">
          <div className="content">
            Il ne vous reste plus qu'une étape pour vous offrir
            <span> {title}</span>. Vous allez payer <span>{totalPrice} €</span>
            {totalPrice}
            (frais de protection et frais de port inclus).
            <Elements stripe={stripePromise}>
              <CheckoutForm title={title} totalPrice={totalPrice} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Payment;

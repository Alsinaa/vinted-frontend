import axios from "axios";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ title, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const cardElement = elements.getElement(CardElement);
      console.log(cardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "L'id de l'acheteur",
      });
      console.log(stripeResponse);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: title,
          amount: totalPrice,
        }
      );
      if (response.data === "succeeded") {
        setCompleted(true);
      } else {
        alert("Votre paiement à échoué, veuillez rééssayer");
      }
    } catch (error) {
      console.log(error.message);
    }

    return (
      <form onSubmit={handleSubmit}>
        <h1>Formulaire de paiement</h1>
        <CardElement />

        {completed ? (
          <p>Votre commande a bien été effectuée.</p>
        ) : (
          <input type="submit" value="Pay" disabled={!stripe} />
        )}
      </form>
    );
  };
};
export default CheckoutForm;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./PaymentForm";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import { FiLoader } from "react-icons/fi";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishablekey =
  "pk_test_51Nv5SQAGawwzCB9CE1iH1XADNkxevSsDnexfxCcCSlSkZXIgIah0mhdgyvLpwtimJPrI0XyX9JBWXnkKW3HmOHl600eqaSDtlG";
const stripePromise = loadStripe(publishablekey);

const StripeConfig = ({ setPay }) => {
  const [loading, setLoading] = useState(true);
  const [cs, setCs] = useState(null);
  const { uri, amount } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const items = JSON.parse(localStorage.getItem("cart"));
    fetch(`${uri}/client`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "USD",
        items,
        description: "cart items",
      }),
    })
      .then((res) => res.json())
      .then((data) => setCs(data.client_secret))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: cs,
  };
  return (
    <>
      {loading ? (
        <div className="paycon">
          <div>
            <FiLoader className="load" />
          </div>
        </div>
      ) : (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm setPay={setPay} />
        </Elements>
      )}
    </>
  );
};

export default StripeConfig;

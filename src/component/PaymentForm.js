import React, { useContext } from "react";
import { useStripe, PaymentElement } from "@stripe/react-stripe-js";
import CartContext from "../context/CartContext";

const CheckoutForm = ({ setPay }) => {
  const stripe = useStripe();
  const { uri, amount } = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      fetch(`${uri}/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else if (400) {
            throw "something went wrong";
          } else {
            throw "server error";
          }
        })
        .then((data) => {
          alert("Payment successful");
          setPay(false);
        })
        .catch((err) => alert("something went wrong"));
    } catch (err) {
      console.log(err);
    }
    // }
  };

  return (
    <div className="paycon">
      <form onSubmit={handleSubmit}>
        <h2 onClick={() => setPay(false)}>&times;</h2>
        <br />
        <br />
        <PaymentElement />
        <button disabled={!stripe}>Pay</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CheckoutForm;

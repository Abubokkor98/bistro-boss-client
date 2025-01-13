import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// todo: add publishable key
const stripePromise = loadStripe("");
export default function Payment() {
  return (
    <div>
      <SectionTitle
        heading={"payment"}
        subHeading={"Please Pay to Eat!"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>

        </Elements>
      </div>
    </div>
  );
}

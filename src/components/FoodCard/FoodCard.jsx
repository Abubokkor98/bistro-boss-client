import React from "react";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import useCart from "../../CustomHooks/useCart";

export default function FoodCard({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  /**
   * ------------
   * note for me
   * ------------
   * refetch er jonno ekhane cart takeo lagbe, but jehetu ami cart ekhane use korbona tai , diye cart take invisible rakhtesi...
   */
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user && user?.email) {
      // send cart to the server
      const cartItem = {
        itemId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to buy this food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

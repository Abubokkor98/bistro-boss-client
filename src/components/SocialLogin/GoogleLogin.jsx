import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const { GoogleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .then((err) => {
            console.log(err.message);
          });
      })
      .then((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="p-4">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-4" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

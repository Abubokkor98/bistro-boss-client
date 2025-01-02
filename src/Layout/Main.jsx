import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

export default function Main() {
  const location = useLocation();
  // console.log(location);
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
}

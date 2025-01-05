import React from "react";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../CustomHooks/useCart";

export default function Dashboard() {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <div className="uppercase p-5">
          <h2 className="text-3xl font-bold">bistro boss</h2>
          <span className="text-xl font-semibold tracking-[0.5em]">
            RESTURANT
          </span>
        </div>
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/user-home"}>
              <FaHome></FaHome>
              USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar>
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>
              MY CART
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <MdReviews></MdReviews>
              ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaList></FaList>
              MY BOOKING
            </NavLink>
          </li>
          <div className="divider"></div>
          {/* common navlinks */}
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaSearch></FaSearch>
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaShoppingBag />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cotact"}>
              <FaMessage />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-slate-400 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

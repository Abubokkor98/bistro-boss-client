import React from "react";
import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
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
        </ul>
      </div>
      <div className="flex-1 bg-slate-400">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

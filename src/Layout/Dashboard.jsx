import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../CustomHooks/useCart";
import useAdmin from "../CustomHooks/useAdmin";

export default function Dashboard() {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <div className="uppercase p-5 ">
          <h2 className="text-3xl font-bold">bistro boss</h2>
          <span className="text-xl font-semibold tracking-[0.5em]">
            RESTURANT
          </span>
        </div>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils>
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-bookings"}>
                  <FaBook></FaBook>
                  MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers></FaUsers>
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
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
                  MY CART ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdReviews></MdReviews>
                  ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList>
                  MY PAYMENT HISTORY
                </NavLink>
              </li>
            </>
          )}
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
      <div className="flex-1 bg-white p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../CustomHooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const dessertsMenu = menu.filter((item) => item.category === "dessert");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const offeredMenu = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title={"our menu"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a blanditiis, sit tenetur dignissimos iure? Est corporis eaque aperiam. Ipsam."
        }
      ></Cover>

      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"today's offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offeredMenu}></MenuCategory>
      {/* dessets menu items */}
      <MenuCategory
        items={dessertsMenu}
        title={"dessert"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a blanditiis, sit tenetur dignissimos iure?"
        }
        img={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizzaMenu}
        title={"pizza"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a blanditiis, sit tenetur dignissimos iure?"
        }
        img={pizzaImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soupMenu}
        title={"soup"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a blanditiis, sit tenetur dignissimos iure?"
        }
        img={soupImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={saladMenu}
        title={"salad"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a blanditiis, sit tenetur dignissimos iure?"
        }
        img={saladImg}
      ></MenuCategory>
    </div>
  );
}

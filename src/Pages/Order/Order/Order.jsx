import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../CustomHooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);
  const dessertsMenu = menu.filter((item) => item.category === "dessert");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Order Food | Bistro Boss</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title={"Order Food"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum et eius. Illo, doloribus dolore."
        }
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={saladMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertsMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksMenu}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}

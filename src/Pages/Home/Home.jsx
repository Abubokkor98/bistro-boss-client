import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/*ekhane banner type er ekta baki */}
      <PopularMenu></PopularMenu>
      {/* ekhane aro 1ta baki */}
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
}

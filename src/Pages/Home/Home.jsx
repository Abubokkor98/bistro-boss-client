import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      {/*ekhane banner type er ekta baki */}
      <PopularMenu></PopularMenu>
      {/* ekhane aro 1ta baki */}
      <Featured></Featured>
    </div>
  );
}

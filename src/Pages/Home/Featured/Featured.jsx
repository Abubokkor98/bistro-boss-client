import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

export default function Featured() {
  return (
    <section className="feature-item text-white pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Dec 30, 2025</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            atque porro eius possimus earum esse molestiae itaque laudantium
            vitae quaerat voluptatum quidem veritatis quia sit quae omnis autem,
            inventore quasi iusto necessitatibus exercitationem? Error assumenda
            enim molestiae, ipsum dicta fuga?
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </section>
  );
}

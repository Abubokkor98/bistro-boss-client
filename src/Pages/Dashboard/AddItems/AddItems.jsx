import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

export default function AddItems() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <SectionTitle
        heading={"add items"}
        subHeading={"what's new"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a category
            </option>
            <option value={"salad"}>Salad</option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Desserts</option>
            <option>Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

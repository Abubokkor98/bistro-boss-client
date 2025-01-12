import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

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
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
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
            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          {/*recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>

            {/* file input */}
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs my-3"
            />
          </label>

          <button type="submit" className="btn bg-orange-400">
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
}

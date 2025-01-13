import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../CustomHooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function UpdateItem() {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { name, category, recipe, price, _id } = useLoaderData();
  const onSubmit = async (data) => {
    console.log(data);
    // upload image to the image bb and get an URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu item data to the server with the image URL
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={`update ${name}`}
        subHeading={`refresh info`}
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
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
                defaultValue={category}
                className="select select-bordered w-full "
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value={"salad"}>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>desserts</option>
                <option>drinks</option>
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
                defaultValue={price}
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
              placeholder="recipe"
              defaultValue={recipe}
            ></textarea>

            {/* file input */}
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs my-3"
            />
          </label>

          <button type="submit" className="btn bg-orange-400">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
}

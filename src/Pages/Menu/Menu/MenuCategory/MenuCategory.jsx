import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";

export default function MenuCategory({ items, title, subTitle, img }) {
  return (
    <div className="pt-8">
      {title && (
        <Cover img={img} title={title} subTitle={subTitle}></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}

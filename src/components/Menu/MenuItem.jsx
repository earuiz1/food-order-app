import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ id, name, price, url, description }) => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-900 p-3 gap-3 shadow-md shadow-slate-400">
      <div className="w-full">
        <img
          src={url}
          className="object-cover bg-center bg-no-repeat rounded-lg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center border-b border-slate-300/50 pb-2">
        <span className="text-sm md:text-base lg:text-lg font-semibold text-slate-50">
          {name}
        </span>
      </div>
      <div className="flex justify-center">
        <span className="text-slate-50 font-medium text-sm line-clamp-3">
          {description}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm md:text-base lg:text-lg italic text-red-700">
          ${price}
        </span>
        <div className="flex items-center gap-2 ">
          <Link to={`item/${id}`}>
            <button className="bg-slate-600 py-2 px-4 text-slate-50 font-semibold text-sm rounded-lg ">
              Add to Cart{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const MenuItem = ({ id, name, price, url }) => {
  const [error, setError] = useState(false);

  const [inputValue, setInputValue] = useState(1);

  const cartContext = useContext(CartContext);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (+inputValue <= 0 || inputValue === "") {
      setError(true);
    } else {
      cartContext.addItem({
        id,
        name,
        quantity: +inputValue,
        price,
      });

      setError(false);
      setInputValue(1);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col rounded-lg bg-slate-900 p-3 gap-3 shadow-md shadow-slate-400"
    >
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
        <span className="text-slate-50 font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
          iusto voluptatum assumenda perspiciatis ratione sit quam velit.
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm md:text-base lg:text-lg italic text-red-700">
          ${price}
        </span>
        <div className="flex items-center gap-2">
          {error && <p className="text-red-700 font-bold text-sm">Invalid!</p>}
          <input
            type="number"
            // ref={inputRef}
            className={`w-[80px] rounded-lg px-2 ${
              error ? "outline-2 outline-red-400 border-2 border-red-400" : ""
            }`}
            onChange={inputHandler}
            value={inputValue}
          />
          <button className="bg-slate-500 py-1 px-4 text-slate-50 font-semibold text-sm rounded-lg ">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default MenuItem;

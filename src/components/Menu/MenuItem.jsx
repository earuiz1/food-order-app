import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const MenuItem = ({ id, name, price }) => {
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
    <form onSubmit={submitHandler}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base lg:text-lg font-semibold text-slate-50">
            {name}
          </span>
          <span className="font-bold text-sm md:text-base lg:text-lg italic text-red-700">
            ${price}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* <label className="text-slate-50 text-sm">Amount:</label> */}
          <input
            type="number"
            // ref={inputRef}
            className="w-[50px] rounded-lg px-2"
            onChange={inputHandler}
            value={inputValue}
          />
          <button className="bg-slate-500 py-1 px-4 text-slate-50 font-semibold text-sm rounded-lg ">
            Add
          </button>
        </div>
      </div>
      {error && (
        <p className="flex justify-end text-red-700 font-bold text-sm mt-1">
          Invalid Input!
        </p>
      )}
    </form>
  );
};

export default MenuItem;

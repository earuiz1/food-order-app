import React, { useRef, useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const MenuItem = ({ id, name, price }) => {
  const [error, setError] = useState(false);

  const inputRef = useRef();

  const cartContext = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    //This value is alway a string even if the input is a number, remember this
    const inputValue = inputRef.current.value;
    const transformedInputValue = +inputValue;

    if (
      inputValue.trim().length === 0 ||
      transformedInputValue < 1 ||
      transformedInputValue > 5
    ) {
      setError(true);
      return;
    }

    cartContext.addItem({
      id: id,
      name: name,
      quantity: transformedInputValue,
      price: price,
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-50">{name}</span>
            <span className="font-bold text-sm italic text-red-700">
              ${price}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* <label className="text-slate-50 text-sm">Amount:</label> */}
            <input
              type="number"
              ref={inputRef}
              className="w-[50px] rounded-lg px-2"
              defaultValue={1}
              min="1"
            />
            <button className="bg-slate-500 text-slate-50 font-semibold text-sm rounded-lg py-1 px-2">
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
    </React.Fragment>
  );
};

export default MenuItem;

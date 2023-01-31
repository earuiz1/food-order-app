import React, { useState } from "react";

const MenuItem = ({ id, name, price }) => {
  return (
    <React.Fragment>
      <form>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-sm font-semibold text-slate-50">{name}</span>
            <span className="text-sm italic text-red-700">${price}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-slate-50 text-sm">Amount:</label>
            <input
              type="number"
              className="w-[50px] rounded-lg px-2"
              defaultValue={1}
              min="1"
            />
            <button className="bg-slate-500 text-sm rounded-lg">Add</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MenuItem;

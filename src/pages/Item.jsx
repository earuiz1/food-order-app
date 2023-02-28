import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";

const Item = () => {
  const params = useParams();
  const meals = useLoaderData();

  const filterMeal = meals.filter((meal) => meal.id === params.itemID);

  return (
    <section className="w-full">
      <h1>{params.itemID}</h1>
      <button>
        <Link to="..">Back</Link>
      </button>

      {filterMeal.map((meal) => {
        return (
          <div className="w-full flex bg-slate-100 min-w-[300px] max-w-[500px] mx-auto">
            {" "}
            {meal.name}
          </div>
        );
      })}
    </section>
  );
};

export default Item;

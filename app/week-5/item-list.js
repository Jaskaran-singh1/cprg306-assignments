"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const nameClicked = () => {
    setSortBy("name");
    items.sort((a, b) => a.name.localeCompare(b.name));
  };

  const categoryClicked = () => {
    setSortBy("category");
    items.sort((a, b) => a.category.localeCompare(b.category));
  };

  const loadButtons = () => {
    if (sortBy === "name") {
      return (
        <div>
          <label for="sort">Sort by:</label>
          <button className="bg-slate-500 p-1 m-2 w-28" onClick={nameClicked}>
            Name
          </button>
          <button
            className="bg-slate-700 p-1 m-2 w-28"
            onClick={categoryClicked}
          >
            Category
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <label for="sort">Sort by:</label>
          <button className="bg-slate-700 p-1 m-2 w-28" onClick={nameClicked}>
            Name
          </button>
          <button
            className="bg-slate-500 p-1 m-2 w-28"
            onClick={categoryClicked}
          >
            Category
          </button>
        </div>
      );
    }
  };

  return (
    <div className="m-4">
      {loadButtons()}
      <ul className="m-4">
        {items.map((item) => (
          <li className="w-96 bg-rose-900 text-white">
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

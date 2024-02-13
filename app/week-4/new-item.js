"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(
      `Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <main className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-80 bg-rose-950 mt-4 text-black p-2"
      >
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          placeholder="Item name"
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
        />
        <div className="flex justify-between mt-2">
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg"
          >
            <option disabled>Category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-rose-800 text-white font-semibold rounded-lg hover:bg-rose-700"
        >
          Add
        </button>
      </form>
    </main>
  );
}

import React, { useContext } from "react";
import { ItemsContext } from "../../Context/itemsContext";

export default function Stats() {
  const { numItems, packedItems, pecentage, items } = useContext(ItemsContext);
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {pecentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${" "}
        ${packedItems} (${pecentage}%) `}
      </em>
    </footer>
  );
}

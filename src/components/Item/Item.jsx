import React, { useContext } from "react";
import { ItemsContext } from "../../Context/itemsContext";

export default function Item({ item }) {
  const { handleDeleteItem, handleToggleItem } = useContext(ItemsContext);

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

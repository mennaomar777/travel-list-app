import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    localStorage.getItem("storedItems")
      ? JSON.parse(localStorage.getItem("storedItems"))
      : []
  );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const pecentage = Math.round((packedItems / numItems) * 100);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  useEffect(() => {
    localStorage.setItem("storedItems", JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        handleAddItems,
        handleDeleteItem,
        handleToggleItem,
        numItems,
        packedItems,
        pecentage,
        deleteAllItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

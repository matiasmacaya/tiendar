import React, { useState, useEffect } from "react";

import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")

      .then((response) => setItems(response.data))

      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Item List</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>

            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

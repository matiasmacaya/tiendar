import React, { useState, useEffect } from "react";

import axios from "axios";

const ItemDetail = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/items/${itemId}`)

      .then((response) => setItem(response.data))

      .catch((error) => console.error(error));
  }, [itemId]);

  if (!item) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>

      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;

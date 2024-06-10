import React, { useState } from 'react';

import axios from 'axios';

 

const ItemForm = () => {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

 

  const handleSubmit = (e) => {

    e.preventDefault();

    const newItem = { title, description };

    axios.post('http://localhost:5000/api/items', newItem)

      .then((response) => {

        console.log(response.data);

        // Add the new task to the list

      })

      .catch((error) => console.error(error));

  };

 

  return (

    <div>

      <h2>Add New Item</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <label>Title:</label>

          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        </div>

        <div>

          <label>Description:</label>

          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        </

 

        <div>

          <button type="submit">Add Item</button>

        </div>

      </form>

    </div>

  );

};

 

export default ItemForm;
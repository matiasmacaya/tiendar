import logo from "./logo.svg";
import "./App.css";
import React from "react";

import ItemList from "./ItemList";

import ItemForm from "./ItemForm";

import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
      <ClipboardItemList />
      <ItemForm />
      <ItemDetail itemId={1} />{" "}
      {/* You can change the itemId to display different item details */}
    </div>
  );
};

export default App;

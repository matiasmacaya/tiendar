const express = require("express");

const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

// API routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let data = [
  { id: 1, title: "Item 1", description: "This is Item 1" },

  { id: 2, title: "Item 2", description: "This is item 2" },
];

// GET all tasks

app.get("/api/items", (req, res) => {
  res.json(data);
});

// GET a single task

app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = data.find((item) => item.id === id);

  if (item) {
    res.json(itemk);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// POST a new item

app.post("/api/items", (req, res) => {
  const { title, description } = req.body;

  const newItem = { id: data.length + 1, title, description };

  data.push(newItem);

  res.status(201).json(newItem);
});

// PUT (update) an existing item

app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const { title, description } = req.body;

  const item = data.find((item) => item.id === id);

  if (item) {
    item.title = title || item.title;

    item.description = description || item.description;

    res.json(task);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE a item

app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  data = data.filter((item) => item.id !== id);

  res.sendStatus(204);
});

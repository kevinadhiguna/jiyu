const { v4: uuidv4 } = require("uuid");
let items = require("../Items");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => {
    item.id === id;
  });
  reply.send(item);
};

const addItem = (req, reply) => {
  // Take name from request body
  const { name } = req.body;
  // Define an item
  const item = {
    // generate a random id
    id: uuidv4(),
    name,
  };

  // Add a new item to an array containing items
  items = [...items, item];
  // Send request status 201 and send the item
  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  reply.send({ message: `Item ${id} has been delted.` });
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;
  items = items.map((item) =>
    item.id === id
      ? {
          id,
          name,
        }
      : item
  );
  let item = items.find((item) => item.id === id);
  reply.send(item);
};

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};

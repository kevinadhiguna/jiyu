const { v4: uuidv4 } = require("uuid");
let items = require("../Items");

const getItems = (req, reply) => {
    reply.send(items);
}

const getItem = (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => {
        item.id === id;
    });
    reply.send(item);
}

const addItem = (req, reply) => {
    // Take name from request body
    const { name } = req.body;
    // Define an item
    const item = {
        // generate a random id
        id: uuidv4(),
        name
    }

    // Add a new item to an array containing items
    items = [...items, item]
    // Send request status 201 and send the item
    reply.code(201).send(item);
}

module.exports = {
    getItems,
    getItem,
    addItem
};

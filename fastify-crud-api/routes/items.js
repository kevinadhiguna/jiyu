const { getItems, getItem, addItem } = require("../controllers/items");

// Item schema
const Item = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" },
    },
};

// Options for get all items (more like a response format)
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: "array",
                items: Item,
            },
        },
    },
    handler: getItems,
};

// Options for get a single item (more like a response format)
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: getItem,
};

const postItemOpts = {
    schema: {
        // Adding an item without a name would be invalid
        body: {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" },
            },
        },
        response: {
            201: Item,
        },
    },
    handler: addItem,
};

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get("/items", getItemsOpts);

    // Get a specific item
    fastify.get("/items/:id", getItemOpts);

    // Add an item
    fastify.post("/items", postItemOpts);

    done();
}

module.exports = itemRoutes;

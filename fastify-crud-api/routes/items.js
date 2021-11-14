const { getItems, getItem } = require("../controllers/items");

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

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get("/items", getItemsOpts);

    // Get a specific item
    fastify.get("/item/:id", getItemOpts);

    done();
}

module.exports = itemRoutes;

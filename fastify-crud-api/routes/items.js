const items = require("../items");

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
    handler: function (req, reply) {
        // Send a reply (response) if one hits '/items' (http://localhost:5000/items) route.
        reply.send(items);
    },
};

// Options for get a single item (more like a response format)
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: function (req, reply) {
        const { id } = req.params;
        const item = items.find((item) => {
            item.id === id;
        });
        reply.send(item);
    },
};

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get("/items", getItemsOpts);

    // Get a specific item
    fastify.get("/item/:id", getItemOpts);

    done();
}

module.exports = itemRoutes;

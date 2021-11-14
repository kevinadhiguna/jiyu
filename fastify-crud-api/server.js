const fastify = require("fastify")({ logger: true });
require("dotenv").config();

const port = process.env.PORT;

const items = require("./items");

// Get all items
fastify.get("/items", (req, reply) => {
    // Send a reply (response) if one hits '/items' (http://localhost:5000/items) route.
    reply.send(items);
});

// Get a specific item
fastify.get("/item/:id", (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => {
        item.id === id;
    });
    reply.send(item);
});

// Start server
const start = async () => {
    try {
        await fastify.listen(port);
    } catch (error) {
        fastify.log.error(error);
        console.error("Error occured.. exiting..");
        process.exit(1);
    }
};

start();

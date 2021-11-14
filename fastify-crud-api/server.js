const fastify = require("fastify")({ logger: true });
require('dotenv').config();

const port = process.env.PORT;

const items = require('./items');

// Send a reply (response) if one hits '/items' (http://localhost:5000/items) route. 
fastify.get('/items', (req, reply) => {
    // reply.send({ test: 'hello' });
    reply.send(items);
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
}

start();

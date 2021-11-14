const fastify = require("fastify")({ logger: true });
require("dotenv").config();

// Register fastify swagger
fastify.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: {
            title: "fastify crud api",
        },
    },
});

// Register a route
fastify.register(require("./routes/items"));

const port = process.env.PORT;

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

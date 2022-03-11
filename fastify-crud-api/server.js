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
  // == To avoid an error such as "Can't read from file https://mywebsite.com/docs/json" (for more: https://github.com/fastify/fastify-swagger/issues/191#issuecomment-802457146) ==
  // uiConfig: {
  //     validatorUrl: null,
  // },
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

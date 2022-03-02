const { createHandyClient } = require("handy-redis"); // <- 'createHandyClient' is deprecated !
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

// Initialize Redis client
let jsRedisClient;
try {
    jsRedisClient = createHandyClient({
        host: process.env.REDIS_HOST || "localhost",
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PW,
    });
} catch (error) {
    console.error(`Error connecting to Redis : ${error}`);
}

async function redisSetMerchant(merchantId, merchantBrand, merchantName) {
    // Set key-value
    await jsRedisClient.set("merchantId", merchantId);
    await jsRedisClient.set("merchantBrand", merchantBrand);
    await jsRedisClient.set("merchantName", merchantName);

    // Get key-value
    const redisMerchantId = await jsRedisClient.get("merchantId");
    const redisMerchantBrand = await jsRedisClient.get("merchantBrand");
    const redisMerchantName = await jsRedisClient.get("merchantName");

    // Show values
    console.log("Merchant ID is :", redisMerchantId);
    console.log("Merchant Brand is :", redisMerchantBrand);
    console.log("Merchant Name is :", redisMerchantName);

    // Close Redis connection
    await jsRedisClient.quit();
}

const id = uuidv4();
redisSetMerchant(id, "Nike", "Air Jordan");

const { createHandyClient } = require("handy-redis"); // <- 'createHandyClient' is deprecated !
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const jsRedisClient = createHandyClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

// Async/Await
async function redisSetMerchant(merchantId, merchantBrand, merchantName) {
    await jsRedisClient.set("merchantId", merchantId);
    await jsRedisClient.set("merchantBrand", merchantBrand);
    await jsRedisClient.set("merchantName", merchantName);

    const redisMerchantId = await jsRedisClient.get("merchantId");
    const redisMerchantBrand = await jsRedisClient.get("merchantBrand");
    const redisMerchantName = await jsRedisClient.get("merchantName");

    console.log("Merchant ID is :", redisMerchantId);
    console.log("Merchant Brand is :", redisMerchantBrand);
    console.log("Merchant Name is :", redisMerchantName);
}

const id = uuidv4();
redisSetMerchant(id, "Nike", "Air Jordan");

// Promise
// jsRedisClient
//     .set("Full Name", "Kai Doe Alcaraz")
//     .then(() => jsRedisClient.get("username"))
//     .then((x) => console.log("Username is :", x));

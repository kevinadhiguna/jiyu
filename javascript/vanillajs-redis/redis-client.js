const { createHandyClient } = require("handy-redis"); // <- 'createHandyClient' is deprecated !
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

// Initialize Redis client
let jsRedisClient;
try {
  jsRedisClient = createHandyClient({
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PW || "redispassword",
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
  console.log("Merchant ID is :", redisMerchantId); // Merchant ID is : 72b8e296-fdf5-48ab-a087-785f7883547a
  console.log("Merchant Brand is :", redisMerchantBrand); // Merchant Brand is : Nike
  console.log("Merchant Name is :", redisMerchantName); // Merchant Name is : Air Jordan

  // Close Redis connection
  await jsRedisClient.quit();
}

const id = uuidv4();
redisSetMerchant(id, "Nike", "Air Jordan");

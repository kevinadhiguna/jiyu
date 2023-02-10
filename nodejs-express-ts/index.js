const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT || 3303;

app.listen(port, () => {
  console.log(`[server] API is running on port ${port}`);
});

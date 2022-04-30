// Source : https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});

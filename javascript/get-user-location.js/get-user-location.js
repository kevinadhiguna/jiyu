const { default: fetch } = require("node-fetch");
require("dotenv").config();

const key = process.env.KEY;

async function getUserLocation(position) {
  const { latitude, longitude } = position.coords;
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`
  );
  const response = await res.json();
  console.log(response);
}

navigator.geolocation.getCurrentPosition(getUserLocation, console.log);

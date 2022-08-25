const axios = require('axios');

exports.clientAxios = axios.create({
  baseURL: process.env.OPEN_WEATHER_URL
});
const { getWeatherByCityName } = require('../controllers/weatherController');

const routes = [
  {
    method: "GET",
    url: "/weather/:city",
    handler: getWeatherByCityName
  },
]

module.exports = routes;
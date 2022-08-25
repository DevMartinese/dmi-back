const { getWeatherByCity } = require('../services/getWeatherByCity');

exports.getWeatherByCityName = async (req, reply) => {
  try {
    const { city } = req.params;

    if (city) {
      const weather = await getWeatherByCity(city);
      return reply.code(200).send(weather);
    }

    const weather = await getWeatherByCity('Rio Cuarto');
    return reply.code(200).send(weather);
  }
  catch (err) {
    reply.code(500).send(err);
  }
};
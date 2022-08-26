const { getWeatherByCity } = require('../services/getWeatherByCity');
const { formatResponse } = require('../util/fortmatResponse');

exports.getWeatherByCityName = async (req, reply) => {
  try {
    const { city } = req.params;

    if (city) {
      const weather = await getWeatherByCity(city);
      const responseFormated = formatResponse(weather);
      return reply.code(200).send(responseFormated);
    }

    const weather = await getWeatherByCity('Rio Cuarto');
    const responseFormated = formatResponse(weather);
    return reply.code(200).send(responseFormated);
  }
  catch (err) {
    reply.send(err);
  }
};
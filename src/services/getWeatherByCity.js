const { clientAxios } = require('../config/clientAxios');

exports.getWeatherByCity = async (city) => {
  const response = await clientAxios.get(`/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`);
  return response.data;
};
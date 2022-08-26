exports.formatResponse = (weatherData) => {
  const { main, name, weather } = weatherData;

  const tempFormat = main.temp > 15 ? true : false;

  return {
    weather: weather[0].description,
    name,
    temp: tempFormat
  };
};
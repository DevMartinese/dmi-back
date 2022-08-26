const { getWeatherByCityName } = require('../controllers/weatherController');
const { getWeatherByCity } = require('../services/getWeatherByCity');
const { formatResponse } = require('../util/fortmatResponse');

const weatherMock = require('./mocks/weatherMock');
const watherResponse = require('./mocks/weatherResponse');

const httpMocks = require('node-mocks-http');
const { createRequest, createResponse } = httpMocks;

jest.mock('../services/getWeatherByCity');

describe('weatherController', () => {
  it('getWeatherByCityName with param', async () => {
    const req = createRequest({
      params: {
        city: 'London',
      },
    });
    const res = createResponse();
    const weather = weatherMock;
    getWeatherByCity.mockResolvedValue(weather);
    await getWeatherByCityName(req, res);
    expect(getWeatherByCity).toHaveBeenCalledWith(req.params.city)
    expect(res.statusCode).toBe(200);
  });

  it('getWeatherByCityName without param', async () => {
    const req = createRequest();
    const res = createResponse();
    getWeatherByCity.mockResolvedValue(weatherMock);
    await getWeatherByCityName(req, res);
    expect(getWeatherByCity).toHaveBeenCalledWith('Rio Cuarto')
    expect(res.statusCode).toBe(200);
  });

  it('formatResponse', () => {
    const weather = weatherMock;
    const responseFormated = formatResponse(weather);
    expect(responseFormated).toEqual(watherResponse);
  });
});
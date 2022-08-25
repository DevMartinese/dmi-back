const { getWeatherByCityName } = require('../controllers/weatherController');

const httpMocks = require('node-mocks-http');
const { createRequest, createResponse } = httpMocks;

jest.mock('../services/getWeatherByCity');

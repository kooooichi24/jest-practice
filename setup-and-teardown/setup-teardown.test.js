const { beforeEach, expect, afterEach, test } = require("@jest/globals");

let cityDatabases = [];

const initializeCityDatabase = () => {
  cityDatabases = ['Vienna', 'San Juan']
}

const clearCityDatabase = () => {
  cityDatabases = [];
}

const isCity = (cityName) => {
  return cityDatabases.includes(cityName);
}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
})

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
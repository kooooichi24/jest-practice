const { test, expect } = require("@jest/globals");
const { throws } = require("assert");

/** コールバック */
test('the data is peanut butter', done => {
  function fetchData() {
  }

  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback('peanut butter'));
});

/** Promise */
test('the data is peanut butter', () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      resolve('peanut butter');
    });
  }

  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('test fetch fails with an error', () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      reject('error');
    });
  }

  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});

/** .resolves / .rejects */
test('the data is peanut butter', () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      resolve('peanut butter');
    });
  }
  
  return expect(fetchData()).resolves.toBe('peanut butter')
});

test('the fetch fails with an error', () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      reject('error');
    });
  }

  return expect(fetchData()).rejects.toMatch('error');
});

/** Async/Await */
test('the data is peanub butter', async () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      resolve('peanut butter');
    });
  }
  const data = await fetchData();

  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      reject('error');
    });
  }

  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      resolve('peanut butter');
    });
  }

  await expect(fetchData()).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', async () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      reject(throws('error'));
    });
  }

  await expect(fetchData()).rejects.toThrow('error');
})
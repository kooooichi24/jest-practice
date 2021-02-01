test('using mock functions', () => {
  const forEach = (items, callback) => {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  };
  const mockCallback = jest.fn(x => 42 + x);

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});

test('.mock properties', () => {
  const myMock = jest.fn();
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  
  bound();

  console.log(myMock.mock.instances);
});

test('return value of mock', () => {
  const myMock = jest.fn();
  console.log(myMock());

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock());
});

test('filter test', () => {
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);
  console.log(filterTestFn.mock.calls[0][0]);
  console.log(filterTestFn.mock.calls[1][0]);
});
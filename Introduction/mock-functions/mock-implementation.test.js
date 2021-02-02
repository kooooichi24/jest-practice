const foo = require('./foo');

jest.mock('./foo');
foo.mockImplementation(() => 42);

test('mock implementation test', () => {
  console.log(foo());
});

test('mock implementation multiple called', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');
  
  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn(), myMockFn());
});

test('mock name test', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42');
  
  expect(myMockFn.getMockName()).toBe('add42');
});
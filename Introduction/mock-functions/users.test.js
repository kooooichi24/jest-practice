const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const res = {data: users};
  axios.get.mockResolvedValue(res);

  return Users.all().then(data => expect(data).toEqual(users));
})
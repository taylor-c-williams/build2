const getMethod = require('./index');

describe('getMethod', () => {
  it('returns the request method', async () => {
    const req = `DELETE / HTTP/1.1
    Host: example.com
    Accept-Language: us-en`;

    const expected = 'DELETE';
    const actual = getMethod(req);
    expect(actual).toEqual(expected);
  });
});

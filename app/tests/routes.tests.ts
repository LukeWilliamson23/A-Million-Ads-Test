const app = require('../../dist/src/app').default;

const request = require('supertest')(app);

describe('Testing routes on API', () => {
  it('Should return 200 status and JSON object containing 29', done => {
    request
      .get('/api/27')
      .expect(200, { 'Nearest Prime': 29 }, done);
  });

  it('Should return 200 status and JSON object containing 123456791', done => {
    request
      .get('/api/123456789')
      .expect(200, {
        "Nearest Prime": 123456791
      }, done);
  });

  it('Should return 404 not found.', done => {
    request
      .get('/incorrectURL')
      .expect(404, { error: 'Not Found' }, done);
  });

  it('Should return 400 bad request. No negative numbers.', done => {
    request
      .get('/api/-123')
      .expect(400, {
        error: "Negative numbers are not prime numbers. (Nearest will always be 2.)"
      }, done);
  });

  it('Should return 400 bad request. Invalid input type', done => {
    request
      .get('/api/abcdefg')
      .expect(400, {
        error: "Input is not a number"
      }, done);
  });
});

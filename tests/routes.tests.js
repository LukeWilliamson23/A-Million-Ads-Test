const request = require('supertest');

const app = require('../dist/src/app');

describe('Testing routes on API', () => {
  
  it('Should return 200 status and JSON object containing 29', done =>{
    request(app)
    .get('/api/27')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect
  });

});
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app'); // Replace with the path to your Express app file

describe('Express App', () => {
  it('should respond with a JSON message on /', async () => {
    const response = await supertest(app).get('/');
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'Hey!! I am learning GitHub Actions' });
  });
});

const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  // it('should sum two numbers', () => {
  //   const x = 2;
  //   const y = 4;
  //   const sum = x + y;
  //   expect(sum).toBe(6);
  // });
  // it('should', async () => {
  //   const user = await User.create({
  //     name: 'Diego',
  //     email: 'teste@email.com',
  //     password_hash: '123123',
  //   });

  //   console.log(user);

  //   expect(user.email).toBe('teste@email.com');
  // });
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'teste@email.com',
      password: '123123',
    });

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456',
    });

    expect(response.status).toBe(200);
  });
});

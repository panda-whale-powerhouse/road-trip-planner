const request = require('supertest');
const express = require('express');
const server = 'http://localhost:3000';

describe('route to Server', () => {
  describe('POST', () => {
    xit("response with 200 status and a message 'successfully login'", () => {
      const aUser = {
        username: 'cwang',
        password: '123',
      };
      return request(server)
        .post('/login')
        .send(aUser)
        .expect(200)
        .then((response) => {
          expect(response.body.success).toBe(true);
          expect(response.body.message).toBe('successfully login');
        });
    });
  });
});

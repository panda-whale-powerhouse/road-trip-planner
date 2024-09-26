const request = require('supertest');
const server = 'http://localhost:3000';

describe('route to Server', () => {
  describe('POST', () => {
    it("response with 200 status and a message 'successfully login'", () => {
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

  describe('GET', () => {
    it('respond with 200 status and a message expected fields from roadtrips: user, name', () => {
      function hasRequiredProperties(res) {
        expect(res.body[0]).toHaveProperty('roadtripName');
        expect(res.body[0]).toHaveProperty('tripData');
        expect(res.body[0]).toHaveProperty('creator');
      }
      return request(server)
        .get('/roadtrips')
        .set('Cookie', ['sessionId=66f31de2cc88441f3af112d4'])
        .expect(200)
        .expect(hasRequiredProperties);
    });
  });
});

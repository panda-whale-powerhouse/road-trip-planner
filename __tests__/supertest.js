const request = require('supertest');
const express = require('express');
const server = 'http://localhost:3000';


const puppeteer = require('puppeteer');
const frontend = 'http://localhost:8080';

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
});




describe('Saved Trips', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
  }, 10000,);

  afterAll(() => {
    browser.close();
  });

  describe('Initial display', () => {
    it('loads successfully', async () => {
      // We navigate to the page at the beginning of each case so we have a
      // fresh start
      await page.goto(frontend);
      await page.waitForSelector('#header');
      const title = await page.$eval('#header', el => el.innerHTML);
      expect(title).toBe('Road Trip Planner');
    });})


  // it('saves and displays Users Saved Trips from Database', () => {
    //pass various inputs to reducer
    //check the displayed cards... from the database?
  // })
})

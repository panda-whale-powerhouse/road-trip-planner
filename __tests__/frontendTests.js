const puppeteer = require('puppeteer');
const frontend = 'http://localhost:8080';
// process.env.JEST_PUPPETEER_CONFIG = require.resolve('./jest-puppeteer.config.cjs');

describe('Saved Trips', () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      console.log('A page is loaded?');
      page = await browser.newPage();
    }, 10000,);
  
    afterAll(() => {
      browser.close();
    });
  
    describe('Initial display', () => {
      it('loads successfully', async () => {
        await page.goto(frontend);
        console.log("We're in")

        await page.waitForSelector('#header');
        console.log('Found the Header')

        const title = await page.$eval('#header', el => el.innerHTML);
        console.log('Trapping the Header')

        expect(title).toBe('Lemonade');
      }, 7000);}, 7000)
  
  
    // it('saves and displays Users Saved Trips from Database', () => {
      //pass various inputs to reducer
      //check the displayed cards... from the database?
    // })
  })
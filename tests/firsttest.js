const {chromium} = require('@playwright/test');

//Async block
(async() => {
    //Creating the browser instance
    const browser = await chromium.launch({
        headless: false

    });

    //Creating the browser context
    const browserContext = await browser.newContext();

    //Create the page
    const page = await browserContext.newPage();

    //Navigate to google.com
    await page.goto("https://google.com");

    //Close browser
    await browser.close();
})();
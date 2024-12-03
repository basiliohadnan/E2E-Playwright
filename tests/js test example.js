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
    await page.goto("http://eaapp.somee.com/");

    //Click on Login button
    //locator, its id and condition hasText
    // await page.locator("a[id='loginLink']", {hasText: "Login"}).click();

    //locator and its id
    // await page.click("a[id='loginLink']");

    //CSS selector
    // await page.locator("#loginLink").click();

    //XPath
    // await page.click("//a[@id='loginLink']");
    // await page.click("a:has-text('Login')");
    // await page.click("text='Login'");

    await page.locator("text=Login", )

    //Close browser
    await browser.close();
})();
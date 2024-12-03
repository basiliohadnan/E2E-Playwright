import {chromium} from '@playwright/test';

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
    await page.goto("https://www.amazon.com.br/", {waitUntil: 'domcontentloaded'});

    //Hover on "Contas e Listas"
    await page.locator("#nav-link-accountList > span").hover();

    //Click on Login button
    await page.click('#nav-flyout-ya-signin:has-text("Faça seu login")');

    //Fill email field
    await page.fill("#ap_email", "name@domain.com");

    //Press Continuar
    await page.click("#continue");
    
    // Close browser
    await browser.close();
})();
import { test } from 'playwright/test'

test.skip('Basic Navigation', async({page}) => {
    await page.goto('https://gitlab.com');
    await page.waitForTimeout(3000);
    await page.reload();
})

test.skip('Interaction with Web Element on Gitlab', async({page}) => {
    await page.goto('https://gitlab.com');
    await page.click('#onetrust-accept-btn-handler'); 
    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial'}).click();

    // await page.locator('[data-testid="new-user-first-name-field"]').fill('Jhon1');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow1');
    await page.getByTestId('new-user-first-name-field').fill('Jhon1');
    await page.getByTestId('new-user-last-name-field').fill('Snow1');
})

test.skip('Using Various Locator Methods', async ({page}) => {
    await page.goto('https://gitlab.com');
    await page.click('#onetrust-accept-btn-handler'); 

    // await page.getByRole('button', {name: 'Contact us'}).click();
    // await page.click('[data-nav-leveltwo="get help"]');
    
    await page.click(':has-text("Sign in")');
    await page.waitForTimeout(3000);
})
import {test, expect} from '@playwright/test'

const testData = {
    firstName: 'Jhon', 
    lastName: 'Doe',
    address: '123 Main st',
    number: '9865678'

}

test.describe('User Registration Tests', () => {
    
    test.beforeEach(async ({page}) => {
        await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_6/index.html');
    })

    test.skip('Register with valid data', async ({page}) => {

        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address', testData.address);
        await page.fill('#number', testData.number);

        await page.click('#register'); //button

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addresstNameText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();

        await expect(firstNameText).toEqual(testData.firstName);
        await expect(lastNameText).toEqual(testData.lastName);
        await expect(addresstNameText).toEqual(testData.address);
        await expect(numberText).toEqual(testData.number);
    })
    
    test.skip('Register with empty fields', async ({page}) => {
        await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_6/index.html');
        
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);

        await page.click('#register'); //button
        const error = await page.locator('#error p').textContent();

        expect(error).toBe('Please fill in all fields.')
    })


    test.skip('Register with all empty fields', async ({page}) => {

        await page.click('#register'); //button

        const error = await page.locator('#error p').textContent();

        expect(error).toBe('Please fill in all fields.')
    })
})
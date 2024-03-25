import {test, expect} from '@playwright/test'

const selectors = {
    firstName: '#firstName',
    age: '#age',
    student: '#isStudent'
}

test.describe('Variable Declarations and Types', () => {
   
    test.skip('Declarations and Types', async ({page}) => {
        let firstname: string = 'Jhon';
        let age: number = 30;
        let isStudent: boolean = false;
        await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_7/index.html');
        await page.fill(selectors.firstName, firstname);
        await page.fill(selectors.age, age.toString());
        await page.check(selectors.student);

        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(firstname);
        expect(await page.textContent('#displayAge')).toBe(age.toString());
        expect(await page.isChecked(selectors.student)).toBe(!isStudent);

    })
})

test.describe('Type Definitions and Interfaces', () => {
    test.skip('Type Definitions and Interfaces', async ({page}) => {
        await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_7/index.html');

        type User = {
            firstName: string, 
            age: number,
            isStudent: boolean
        };

        let user: User = {
            firstName: 'Jane',
            age: 25, 
            isStudent: true
        }

        await page.fill(selectors.firstName, user.firstName);
        await page.fill(selectors.age, user.age.toString());
        await page.check(selectors.student);

        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
        expect(await page.textContent('#displayAge')).toBe(user.age.toString());
        expect(await page.isChecked(selectors.student)).toBe(user.isStudent);

    })
})
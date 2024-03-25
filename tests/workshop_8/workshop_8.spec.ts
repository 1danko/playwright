import {test, expect} from '@playwright/test'
import { PageObject } from './page/page';


test.describe('Sample Test', () => {
   
    let pageObject: PageObject;

    test.beforeEach(async ({browser}) => {
        const page = await browser.newPage();
        pageObject = new PageObject(page);
        await pageObject.open('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_8/index.html');
    })

    test.skip('test 1, Fill all inputs', async ({page}) => {
        await pageObject.fillFirstName('John');
        await pageObject.fillAge('30');
        await pageObject.checkIsStudent();

        await pageObject.applyData();

        expect(await pageObject.text(pageObject.displayFirstNameSelector)).toBe('John');
        expect(await pageObject.text(pageObject.displayAgeSelector)).toBe('30');
        expect(await pageObject.text(pageObject.displayIsStudenteSelector)).toBe('Yes');
    })


});
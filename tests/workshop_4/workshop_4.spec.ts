import {test, expect} from '@playwright/test'

test.skip('Handling Alerts', async ({page}) => {
    await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_4/index.html');
    let allertMessage = '';
    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert');
        allertMessage = await dialog.message();
        await dialog.accept();
    });

    await page.click('#show-alert');

    expect(allertMessage).toBe('This is a simple alert.')
})

test.skip('Confirm Alert', async ({page}) => {
    await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_4/index.html');
    let allertMessage = '';
    page.on('dialog', async(dialog) => {
        allertMessage = await dialog.message();
        await dialog.dismiss();
    });

    await page.click('#show-confirm');

    expect(allertMessage).toBe('You clicked Cancel.')
})

test.skip('Handling pop-ups', async ({page}) => {
    await page.goto('file:///D:/TestAutomation/playwright_course_by_VasilShpak/playwright/tests/workshop_4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup'),
    ]);

    await popup.waitForLoadState();

    await popup.close();
})
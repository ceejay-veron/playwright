import {test, expect, chromium } from '@playwright/test'

test('Slow motion and video recording demo', async() => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo : {
             dir: 'video/',
             size: {width: 800, height: 600}
        }
    });

    const page = await context.newPage();

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').press('Control+z');
    await page.getByLabel('Password:').fill('admin');
    await page.getByLabel('Password:').click({
      button: 'right'
    });
    await page.locator('form div').filter({ hasText: 'Log in' }).click();

    await context.close();



})
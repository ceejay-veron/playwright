import {test, expect } from '@playwright/test'


test('Demo Login Test 1', async({page}) => {



  await page.goto('https://demo.applitools.com/')
  await page.pause()
  await page.locator('[Placeholder="Enter your username"]').fill('Raghav')
  await page.locator('[Placeholder="Enter your password"]').fill('1234')
  await page.locator( 'text=Sign in').click()

  await page.waitForSelector('text=Sign in', {timeout: 5000})
  //await expect(page.locator('text=Sign in')).toHaveCount(1)
  await page.locator('text=ACME').isVisible();

 
})

test('Demo Login Test 2', async({page}) => {



  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.pause()
  //await page.locator('[Placeholder="Enter your username"]').fill('Raghav')
 // await page.locator('[Placeholder="Enter your password"]').fill('1234')
 // await page.locator( 'text=Sign in').click()

  //await page.waitForSelector('text=Sign in', {timeout: 5000})
  //await expect(page.locator('text=Sign in')).toHaveCount(1)
 // await page.locator('text=ACME').isVisible();

 
})


test.only('Demo Login Test 3', async({page}) => {


  //await page.pause()
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
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.locator('text=Logout').click();
   // ---------------------
   await page.close();
  




})


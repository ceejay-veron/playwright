const {test, expect } = require('@playwright/test')



let context;
let page;

test.beforeAll(async ({ browser  }) => {

    context = await browser.newContext();
    await context.tracing.start(
        {
        snapshots:true,
        screenshots: true
    });

    page=await context.newPage();
})


test.afterAll(async () => {
    await context.tracing.stop({path : 'test2_trace.zip'})
})

/*test('My first test ', async ({}) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})*/


test('test', async ({}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();



  // to start Recording inside a test Block 
  //await context.tracing.start(
    //{
      //  snapshots: true,
        //screenshots: true


  //});


  await page.locator('[data-test="password"]').press('CapsLock');
  await page.locator('[data-test="password"]').fill('S');
  await page.locator('[data-test="password"]').press('CapsLock');
  await page.locator('[data-test="password"]').fill('Secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button1234"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();


//to end Recording inside a test block
 // await context.tracing.stop({path: ' test1_trace.zip'})
});
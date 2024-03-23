import { test, expect } from '@playwright/test';
import {LoginPage} from  '../../pages/login'

test.only('test1', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await  Login.login('tomsmith', 'SuperSecretPassword!')

    /*
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
*/

})

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').dblclick();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('S');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Super');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperS');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperSecret');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperSecretP');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});
import test, {page, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    //ASSERTIONS
    // Check element present or not

    await expect(page.locator('text =The Kitchen')).toHaveCount(1)

    if(await page.$('text =The Kitchen')){
       await page.locator('text =The Kitchen').click()


    }

    //check element hidden or visible
    await expect(page.locator('text=The kitchen')).toBeVisible()
   // await expect.soft(page.locator('text=The kitchen')).toBeHidden()

    //check element or disabled
    await expect(page.locator('text=The kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The kitchen')).toBeDisabled()

    // check Text
    await expect(page.locator('text=The kitchen')).toHaveText('The Kitchen')
   // await expect.soft(page.locator('text=The kitchen')).not.toHaveText('The kitchen')

   await page.pause()

    //Check attribute value

    await expect(page.locator('text=The kitchen')).toHaveAttribute('class, /.*css-dpmy2a/')
    await expect(page.locator('text=The kitchen')).toHaveClass(/.*css-dpmy2a/)

    //CHECK PAGE URL AND TITLE
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('/ .*kitchen')

    //visual validation with screenshot
    await expect(page).toHaveScreenshot()






})
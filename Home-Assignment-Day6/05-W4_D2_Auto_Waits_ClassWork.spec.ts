// implement Playwright's auto-waiting features
import { chromium, expect, test } from "@playwright/test";

test(`To demonstrate the Auto waits functionality`, async ({ page }) => { 
await page.goto(`https://leafground.com/waits.xhtml`)//Navigate to Leafground autowait link 
await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click() //click on the click button
await expect(page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='I am here']//parent::button`)).toBeVisible()//Auto retrying mechanism for visibility
await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='I am here']//parent::button`).click()//click on I am here button

await page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click() //click on the click button
await page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/parent::div//span[text()='I am about to hide']//parent::button`).click()//click on I am about to hide
await expect(page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/parent::div//span[text()='I am about to hide']//parent::button`)).toBeHidden()//Auto retrying mechanism for invisibility

await page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click First Button']//parent::button`).click() //click on the Click First Button
await expect(page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click Second']//parent::button`)).toBeEnabled()//Auto retrying mechanism for enable
await page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click Second']//parent::button`).click()//click on Click Second

await page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`).click() //click on I am going to change! button
await expect(page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`)).toHaveText('I am going to change!')//checking a text of the button is I am going to change!
await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click() //click on the Click Button
await expect(page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`)).toHaveText('Did you notice?')//Auto retrying mechanism for checking a text
await page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`).click()//click on Did you notice? button

})

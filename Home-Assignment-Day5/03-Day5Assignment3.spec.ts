 //Create the Individuals 
import { chromium, expect, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => { 


    await page.goto(`https://login.salesforce.com/`)//Navigate to salesforce link 
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)//Enter username
    await page.locator(`#password`).fill(`TestLeaf@2025`)//Enter password
    await page.locator(`#Login`).click()//click on login
    //await page.waitForTimeout(3000)
    await page.locator(`//div[@class='slds-icon-waffle']`).click() // Click on toggle menu button from the left corner
    await page.locator(`//button[text()='View All']`).click()//Click on View All
    await page.locator(`//label[text()='Search apps or items...']/following-sibling::div/input`).fill(" Individuals")//Enter indivisual value in the search box 
    //await page.locator(`(//input[@class='slds-input'])[1]`).fill(" Individuals")
    await page.locator(`//mark[text()='Individuals']`).click()//Click on the Individuals link
     await page.locator(`//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']`).click() //Click on the Individuals tab down arrow
  await page.locator(`//span[text()='New Individual']`).click()//Click on the New Individual button
         await page.locator(`//input[@class='lastName compoundBLRadius compoundBRRadius form-element__row input']`).fill("Khairnar")//Enter the data into last name
 await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click()//click on the Save button
       await expect.soft(page.locator(`//span[@class='uiOutputText']/parent::div`)).toHaveText('Khairnar');//verify Individuals Name
    
})
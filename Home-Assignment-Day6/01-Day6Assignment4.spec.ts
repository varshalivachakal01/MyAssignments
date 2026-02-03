//Edit the Individuals
import { chromium, expect, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => { 


    await page.goto(`https://login.salesforce.com/`)//Navigate to salesforce link 
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)//Enter username
    await page.locator(`#password`).fill(`TestLeaf@2025`)//Enter password
    await page.locator(`#Login`).click()//Click on the LOgin button
    //await page.waitForTimeout(3000)
    await page.locator(`//div[@class='slds-icon-waffle']`).click() // Click on toggle menu button from the left corner
    await page.locator(`//button[text()='View All']`).click()//Click on View All
    await page.locator(`//label[text()='Search apps or items...']/following-sibling::div/input`).fill(" Individuals")//Enter indivisual value in the search box 
    //await page.locator(`(//input[@class='slds-input'])[1]`).fill(" Individuals")
    await page.locator(`//mark[text()='Individuals']`).click()//Click on the Individuals link


  await page.locator(`//span[text()='Individuals']/parent::a`).click()//Click on the Individuals tab
  await page.locator(`//input[@name='Individual-search-input']`).fill("Kaka")//Enter the last name in the search box
  await page.keyboard.press('Tab');//Click on the enter
  await page.locator(`(//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small'])[1]`).click()//Click on the down arrow in the search result
  

 await page.locator(`//div[@class='forceActionLink' and text()='Edit']`).click()//click on the edit button
 await page.locator(`//span[text()='Salutation']/parent::span/following-sibling::div`).click()//click on the Salutation dropdown
 await page.locator(`//*[text()='Mr.' and @class='selected']`).click();//click on the value slected in the dropdown 
 await page.locator(`//*[@class='firstName compoundBorderBottom form-element__row input']`).fill("Anvika")//Enter the firstname
 await page.locator(`//*[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click(); //Click on the Save button
 await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`)).toContainText("Anvika")//Verify the first name 


   
  
})
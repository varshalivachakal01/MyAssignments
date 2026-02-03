//Edit the Lead


import { chromium, expect, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => { 


    await page.goto(`https://login.salesforce.com/`)//Navigate to salesforce link 
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)//Enter username
    await page.locator(`#password`).fill(`TestLeaf@2025`) //Enter password
    await page.locator(`#Login`).click()//click on login
    //await page.waitForTimeout(3000)
    await page.locator(`//div[@class='slds-icon-waffle']`).click() // Click on toggle menu button from the left corner
    await page.locator(`//button[text()='View All']`).click() //Click on View All
    await page.locator(`//p[text()='Sales']`).click() //Click on Sales
   // await page.locator(`//a[@title='Leads' and @class='slds-context-bar__label-action dndItem']`).click()
    await page.locator(`//span[text()='Leads']/parent::a`).click()//Click on Leads tab 
    await page.locator(`//input[@name='Lead-search-input']`).fill(`Ghulane`)//Enter the last name in the searchbox
    await page.keyboard.press('Tab');//Click on the enter
    await page.locator(`(//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small'])[1]`).click()//Click on down arrow button  
    await page.locator(`//div[text()='Edit']`).click() //click on the Edit button 
    await page.locator(`//button[@name='salutation']`).click() //Select Salutation dropdown 
    await page.locator(`(//span[text()='Mrs.'])[2]`).click(); //click on the updated value to be selected in the dropdown 
    await page.locator(`//input[@name='lastName']`).clear()//Clear the Last Name 
    await page.locator(`//input[@name='lastName']`).fill(`Ghulane6`)//Update the Last Name 
    await page.locator(`//input[@name='Company']`).clear()//Clear the Company Name
    await page.locator(`//input[@name='Company']`).fill(`ABK6`)//Update the Company Name
    await page.locator(`//button[@name='SaveEdit']`).click()//Click Save
    await page.locator(`//input[@name='Lead-search-input']`).fill(`Ghulane6`)//Enter the last name in the searchbox
    await page.keyboard.press('Tab');//Click on the enter
    await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`)).toContainText('Ghulane6');//Verify Leads last name updated
    await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[4]`)).toContainText('ABK6');//Verify Leads Company name updated


    
})
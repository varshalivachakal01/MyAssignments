//Create the Lead

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
    await page.locator(`//div[contains(text(), 'New')]`).click()//Click on New button  
    await page.locator(`//button[@name='salutation']`).click() //Select Salutation dropdown 
    await page.locator(`//span[text()='Mr.']`).click(); //Select Salutation dropdown 
    await page.locator(`//input[@name='lastName']`).fill(`Ghulane`)//Enter the Last Name 
    await page.locator(`//input[@name='Company']`).fill(`ABK`)//Enter the Company Name
    await page.locator(`//button[@name='SaveEdit']`).click()//Click Save
   //let c= await page.locator(`(//slot[@name='primaryField']/lightning-formatted-name)[2]`).isVisible
 //console.log(c);
     await expect.soft(page.locator(`//slot[@name='primaryField']/lightning-formatted-name`)).toHaveText('Mr.  Ghulane');//Verify Leads name created
 
})
//Edit the Lead
import  { chromium, firefox,webkit ,test} from "@playwright/test";


test('To Learn the locators', async ({page}) => {
    
/*
const browser=await chromium.launch()
const context=await browser.newContext()
const page= await context.newPage() */
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator(`.inputLogin`).first().fill(`Demosalesmanager`)//enter username
await page.locator(`.inputLogin`).last().fill(`crmsfa`)//enter password
await page.locator(`.decorativeSubmit`).click()//click on login
 await page.waitForTimeout(3000)
await page.locator(`//a[contains(text(),'CRM')]`).click()//click on CRM/SFA
await page.locator(`//a[text()='Leads']`).click()//click on Leads tab
await page.locator(`//a[text()='Create Lead']`).click()//click on crate lead
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("ABK")//enter comapany name
await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Shiv")//enter first name
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Manchekar")//enter last name
await page.locator(`//input[@name='submitButton']`).click()//click on crate lead
await page.locator(`//a[text()='Edit']`).click()//click on edit lead
await page.locator(`//input[@id='updateLeadForm_companyName']`).clear()//clear the company name value
await page.locator(`//input[@id='updateLeadForm_companyName']`).fill("Companyname1")//update comapany name
await page.locator(`//input[@value='Update']`).click()//click on update
//await page.locator(`(//input[@name='submitButton'])[1]`).click()//click on update
}



)
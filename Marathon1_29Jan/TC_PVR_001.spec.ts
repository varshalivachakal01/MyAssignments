// implement Playwright's auto-waiting features
import { chromium, expect, test } from "@playwright/test";
import { log } from "console";

test(`Book Movie Ticket in PVR Cinemas`, async ({ page }) => { 
await page.goto(`https://www.pvrcinemas.com/`)//Navigate to PVR Cinemas link
await page.locator(`//h6[text()='Chennai']`).click() //Select the city as “Chennai” 
await page.locator(`//span[text()='Cinema']`).click()  //select Cinema option
await page.locator(`//span[text()='Select Cinema']`).click()  //click on Cinemas dropdown
await page.locator(`//span[text()='INOX National,Virugambakkam Chennai']`).click()  //Choose cinema from the available list
await page.locator(`//span[contains(text(),'Today')]`).click()//Select movie date
await page.locator(`//span[text()='BORDER 2']/parent::li`).click()//select the movie
await page.locator(`//span[text()='10:35 PM']`).click()//select the movie time
await page.locator(`//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']`).click()//Click on the book button
await page.locator(`//button[@class='sc-kCuUfV iBvycX reject-terms']`).click()//Click on the Accept button in the Terms and Condition
await page.locator("(//span[text()='1'])").nth(2).click()//select the available seat
//await expect.soft(page.locator(`//div[@class='seat-number']/p`)).toHaveText('G1');//Verify seat information using assertion 
//await expect.soft(page.locator(`//div[@class='grand-total']/following-sibling::div`)).toHaveText('242.61');//Verify the total ticket amount using assertions
await expect(page.locator(`//div[@class='seat-number']/p`)).toHaveText('G1');//Verify seat information using assertion 
await expect(page.locator(`//div[@class='grand-total']/following-sibling::div`)).toHaveText('242.61');//Verify the total ticket amount using assertions
const title=await page.title() //to get the titel of the page
console.log(title); //PVR Cinemas
expect(title).toContain('PVR Cinemas')//Verify the Title of the page
await page.locator(`//button[@class='sc-bbbBoY kbsOBB btn-proceeded']`).click()//Click on the Proceed Button

})

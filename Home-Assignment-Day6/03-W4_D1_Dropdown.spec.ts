//Dropdown and assertion functionalities using Playwright  
import { chromium, expect, test } from "@playwright/test";

test(`Test to learn dropdown`, async ({ page }) => { 
await page.goto(`https://leafground.com/select.xhtml`)//Navigate to Leafground dropdown link 
await page.selectOption(`//select[@class="ui-selectonemenu"]`,{label:"Playwright"}) //select one option from favorite UI automation tool
const dropdown=page.locator('//select[@class="ui-selectonemenu"]/option')//get all the favorite UI automation tool
const dropDownCount=await dropdown.count()//get the count
console.log(dropDownCount);//print the count
//to print all the options in favorite UI automation tool
for (let index = 0; index < dropDownCount; index++) {
console.log(await page.locator('//select[@class="ui-selectonemenu"]/option').nth(index).innerText());            
}

const visibleCountry= await page.locator(`//h5[text()='Choose your preferred country.']/parent::div//label`).isVisible()
if (visibleCountry) {
await page.locator(`//h5[text()='Choose your preferred country.']/parent::div//label`).click()//click on select country
await page.locator(`//li[text()='Brazil']`).click()//click on Brazil option    
}
const visibleCity=await page.locator(`//h5[text()='Confirm Cities belongs to Country is loaded']/parent::div//label`).isVisible()
if (visibleCity) {
await page.locator(`//h5[text()='Confirm Cities belongs to Country is loaded']/parent::div//label`).click() //click on select city
await page.locator(`//li[text()='Salvador']`).click()//click on Salvador option    
}
const visibleCourse=await page.locator(`//h5[text()='Choose the Course']/parent::div//button`)
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() //click on the down arrow in the choose courses
await page.locator('//li[text()="Selenium WebDriver"]').click()//click on Selenium WebDriver    
}
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() //click on the down arrow in the choose courses
await page.locator('//li[text()="Playwright"]').click()//click on Playwright    
} 
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() //click on the down arrow in the choose courses
await page.locator('//li[text()="RestAssured"]').click()//click on RestAssured    
}
const visibleLanguage=await page.locator(`//h5[text()='Choose language randomly']/parent::div//label`).isVisible()
if (visibleLanguage) {
await page.locator(`//h5[text()='Choose language randomly']/parent::div//label`).click()//click on the down arrow in the choose language
await page.locator(`//li[text()='English']`).click()//click on English    
}
const visible=await page.locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//label`).isVisible()
if (visible) {
await page.locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//label`).click()//click on the Select 'Two' irrespective of the language chosen
await page.locator(`//li[text()="Two"]`).click()//click on Two option     
}

/*
//await page.selectOption(`//h5[text()='Choose your preferred country.']/parent::div//select`,{value:"Brazil"}) //select preffered country from country
//await page.selectOption(`//h5[text()='Confirm Cities belongs to Country is loaded']/parent::div//select`,{value:"Salvador"}) //select preffered city from city
await page.locator(`//button[@class="ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only"]/following-sibling::select`).click() //select preffered city from city
await page.locator('//li[text()="Selenium WebDriver"]').click()
await page.locator(`//button[@class="ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only"]/following-sibling::select`).click() //select preffered city from city
await page.locator('//li[text()="Playwright"]').click()
await page.locator(`//button[@class="ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only"]/following-sibling::select`).click() //select preffered city from city
await page.locator('//li[text()="RestAssured"]').click()
await page.selectOption(`//h5[text()="Choose language randomly"]/parent::div//select`,{value:"English"}) //select language
await page.selectOption(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//select`,{value:"Two"}) //select two

//button[@class='ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only']/following-sibling::select
*/
})

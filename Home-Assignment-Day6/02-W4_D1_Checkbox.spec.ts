// Checkbox functionalities using Playwright 
import { chromium, expect, test } from "@playwright/test";

test(`Test to learn Checkbox functionalities`, async ({ page }) => { 
await page.goto(`https://leafground.com/checkbox.xhtml`)//Navigate to Leafground checkbox link 
const checkedBasic=await page.locator(`//span[text()='Basic']/preceding-sibling::div/input`).isChecked()//Check "Basic Checkbox.” is checked or not
if (checkedBasic === false) 
{
await page.locator(`(//span[text()='Basic']/preceding-sibling::div)[2]`).click()//Click on the "Basic Checkbox.” when it is not checked already
}
const checkedAjax=await page.locator(`//span[text()='Ajax']/preceding-sibling::div/input`).isChecked()//Check "Notification Checkbox.” is checked or not
if (checkedAjax === false) 
{
await page.locator(`(//span[text()='Ajax']/preceding-sibling::div)[2]`).click()//Click on the "Notification Checkbox." when it is not checked already
await expect(page.locator(`//span[@class='ui-growl-title']`)).toHaveText('Checked');//Verify that the expected message is displayed.  
}
const checkedJava=await page.locator(`//label[text()='Java']/preceding-sibling::div/div/input`).isChecked()//Check favorite language is checked or not
if (checkedJava === false) 
{
await page.locator(`//label[text()='Java']/preceding-sibling::div`).click()//Click on your favorite language:Java when it is not checked already
}
const checkedJavascript=await page.locator(`//label[text()='Javascript']/preceding-sibling::div/div/input`).isChecked()//Check favorite language is checked or not
if (checkedJavascript === false) 
{
await page.locator(`//label[text()='Javascript']/preceding-sibling::div`).click()//Click on your favorite language:Javascript when it is not checked already
}
//const checkedTriState=await page.locator(`(//h5[text()='Tri State Checkbox']/parent::div//input/following::span)[1]`).isChecked()//Check Tri State checkbox is checked or not
//if (checkedTriState === false) 
//{
await page.locator(`//h5[text()='Tri State Checkbox']/parent::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']`).click()//Click on the "Tri-State Checkbox." when it is not checked already 
await expect(page.locator("//span[@class='ui-growl-title']/following-sibling::p").nth(1)).toHaveText('State = 1');//Verify which tri-state option has been chosen. 
//}
const checkedToggleSwitch=await page.locator(`//div[@class='ui-toggleswitch-slider']/preceding-sibling::div/input`).isChecked()//Check Toggle switch is enabled or not
if (checkedToggleSwitch === false) 
{
await page.locator(`//div[@class='ui-toggleswitch-slider']`).click()//Click on the "Toggle Switch."
await expect(page.locator(`//span[@class='ui-growl-title']`).nth(0)).toHaveText('Checked');//Verify that the expected message is displayed.
}
const disabled1=await expect(page.locator(`//h5[text()='Verify if check box is disabled']/parent::div[@class='card']//input[@type='checkbox']`)).toBeDisabled()//To check if checkbox is disabled
console.log(disabled1);
await page.locator(`//ul[@class='ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all']`).click()//Select multiple options on the page  
const checkedMiami=await page.locator(`//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']//input`).isChecked()//Check option to check is selected or not
if (checkedMiami===false) {
await page.locator(`//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()//Select multiple options on the page      
}
const checkedLondon=await page.locator(`//label[text()='London']/preceding-sibling::div[@class='ui-chkbox ui-widget']//input`).isChecked()//Check option to check is selected or not
if (checkedLondon===false) {
await page.locator(`//label[text()='London']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()//Select multiple options on the page      
}
await page.locator(`//a[@class='ui-selectcheckboxmenu-close ui-corner-all']`).click()//Click on the close button


 
//12. Perform any additional actions or verifications required. -->what to do for this Step
//13. Close the web browser when done. --->alreday closed in page fixture

})

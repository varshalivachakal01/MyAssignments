//Radio button functionalities using Playwright 
import { expect, test } from "@playwright/test";

test(`Test to learn how to handle Radio button`, async ({ page }) => { 
await page.goto(`https://leafground.com/radio.xhtml`)//Navigate to Leafground radio link 
const visibleBrowser=await page.locator(`(//h5[text()='Your most favorite browser']/parent::div//label[text()='Chrome']/preceding-sibling::div/div)[2]`).isVisible()
if (visibleBrowser) {
await page.locator(`(//h5[text()='Your most favorite browser']/parent::div//label[text()='Chrome']/preceding-sibling::div/div)[2]`).click()   
await expect(page.locator(`(//h5[text()='Your most favorite browser']/parent::div//label[text()='Chrome']/preceding-sibling::div/div)[2]`)).toBeEnabled()
}
const visibleCity=await page.locator(`(//h5[text()='UnSelectable']/parent::div//label[text()='Bengaluru']/preceding-sibling::div/div)[2]`).isVisible()
if (visibleCity) {
await page.locator(`(//h5[text()='UnSelectable']/parent::div//label[text()='Bengaluru']/preceding-sibling::div/div)[2]`).click()    
await expect(page.locator(`(//h5[text()='UnSelectable']/parent::div//label[text()='Bengaluru']/preceding-sibling::div/div)[2]`)).toBeEnabled()
}

const count=await page.locator(`//h5[text()='Find the default select radio button']/parent::div//input`).count()
console.log(count);


for (let index = 0; index < count; index++) {
    const checked=await page.locator(`//h5[text()='Find the default select radio button']/parent::div//input`).nth(index).isChecked()
    console.log(checked);
    const innertext =await page.locator(`//h5[text()='Find the default select radio button']/parent::div//label`).nth(index).innerText()
    console.log(innertext);
    if(checked){
    await expect(page.locator(`//h5[text()='Find the default select radio button']/parent::div//label`).nth(index)).toHaveText('Safari')
    console.log("Safari is selected");
    }
    else{
    console.log("Default browser not selected");    
    }
}

const countAgeOption=await page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//input`).count()
console.log(countAgeOption);
for (let i = 0; i < countAgeOption; i++) {
  const checkedAgeOption=await page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//input`).nth(i).isChecked()
    console.log(checkedAgeOption);
    const innertextAgeOption =await page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//label`).nth(i).innerText()
    console.log(innertextAgeOption);
    if(checkedAgeOption){
    await expect(page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//label`).nth(i)).toHaveText('21-40 Years')
    console.log("Age 21-40 Years is selected");
    }
    else{
    console.log("Default age not selected");    
    }
    
}
const checkedAgeOptions=await page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//label[text()='1-20 Years']/parent::div//input`).isChecked()
console.log(checkedAgeOptions);
if (checkedAgeOptions=== false) {
   await page.locator(`//h5[text()='Select the age group (only if not selected)']/parent::div//label[text()='1-20 Years']/parent::div//span`).click() 
}

})

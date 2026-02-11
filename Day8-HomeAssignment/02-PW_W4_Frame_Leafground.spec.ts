 import { expect, test } from "@playwright/test";
 
test(`Learn frames interaction`,async ({page}) => {

await page.goto(`https://leafground.com/frame.xhtml`);

//interact with frames
const frameRef =page.frameLocator(`[src="default.xhtml"]`)
await frameRef.locator("#Click").click();//Interact with the Click Me button inside frame
await expect (frameRef.locator("#Click")).toHaveText('Hurray! You Clicked Me.')//Assert the text changed after clicking the button 

//Get the total count of frames present in the page 
const allframes = page.frames(); 
const frameCount = allframes.length
console.log("The count of the frames is",frameCount); 

//interact with neasted frames
const frameRefOuterFrame = page.frameLocator(`[src="page.xhtml"]`) 
const frameRefInnerrFrame = frameRefOuterFrame.frameLocator(`[id="frame2"]`)    
await frameRefInnerrFrame.locator("#Click").click(); // Interact with the Click Me button present inside the nested frames 
await expect (frameRefInnerrFrame.locator("#Click")).toHaveText('Hurray! You Clicked Me.')//Assert the text changed after clicking the button
})
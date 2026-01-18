import {test, chromium, webkit } from "@playwright/test"
import { log } from "console"

test ('Test to launch browser',async() => {
/*for MS Edge browser*/
const browser1 = await chromium.launch({headless:false, channel:"msedge"})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto(`https://www.redbus.in/`)
    const Title1 = await page1.title();
      const Url1 = await page1.url();
    console.log("The title of the page opened in MS Edge is",Title1);
    console.log("The URL of the page opened in MS Edge is",Url1);
 /*for webkit browser*/
    const browser2 = await webkit.launch({headless:false, channel:"webkit"})
    const context2 = await browser2.newContext()
    const page2 = await context2.newPage()
    await page2.goto(`https://www.flipkart.com/`)
    const Title2 = await page2.title();
      const Url2 = await page2.url();
    console.log("The title of the page opened in Webkit is",Title2);
    console.log("The URL of the page opened in MS Edge is",Url2);


})
import {Builder, By, 
    Capabilities, ChromiumWebDriver, until,
    WebDriver, WebElement
} from "selenium-webdriver"

import { Walmart } from "./landingPage"
import { ItemsToSearch } from "./itemsPage"
import { AddItems } from "./addItemsPage"
import { Addons } from "./addonsPage"
import { JustCart } from "./cartObjectpage"

const fs = require('fs')

const home = new Walmart()
const itemDetail =  new ItemsToSearch()
const itemAction = new AddItems()
const extraMoney = new Addons()
const cartBasket = new JustCart()

describe("basicSearch", () => {
    beforeEach(async () => {
        await home.navigate()
        await home.driver.sleep(10000) 
        // Maximize the brower window
    })

    //happens when all tests are done
    afterAll(async () => {
       await home.driver.quit()
    })

    test('LG 55” Class 4K Protection and Expert Help', async () => {
        await home.click(home.walSearch);
        await home.setInput(home.walSearch, "LG 55” Class 4K\n")
        await home.driver.sleep(10000)

        //click LG 55'' Class 4k item
        await itemDetail.click(itemDetail.LGTv)
        // select 5-year plan Protection
        await extraMoney.click(extraMoney.lgProtection)
        // select Mountain Service Expert Help
        await extraMoney.click(extraMoney.lgHelp) 
        
        //Taking snapshot at the top of page
        await fs.writeFile(`${__dirname}/lgTop.png`, 
        await home.driver.takeScreenshot(), "base64",
        (e => {
        if (e) console.error(e)
        else console.log("Save Successful Screenshot")
         })
        )

        // click the warning dropdown
        await extraMoney.click(extraMoney.warningDrodown) 

        //take a snapshot
        await fs.writeFile(`${__dirname}/lgMidway.png`, 
        await home.driver.takeScreenshot(), "base64",
        (e => {
        if (e) console.error(e)
        else console.log("Save Successful Screenshot")
         })
        )

        // add to cart
        await itemAction.click(itemAction.addToCartButton)
        //remove search term
        await itemAction.click(itemAction.removeSearchTerm)

        await home.click(home.walSearch);
        await home.setInput(home.walSearch, "smart drying machine\n")
        await home.driver.sleep(10000)

        //click mart drying machineitem
        await itemDetail.click(itemDetail.smartDryingMachine)
        // select 3-year plan Protection
        await extraMoney.click(extraMoney.smartDryingMachineProtection)
        
        //Taking snapshot at the top of page
        await fs.writeFile(`${__dirname}/SmartMachineTop.png`, 
        await home.driver.takeScreenshot(), "base64",
        (e => {
        if (e) console.error(e)
        else console.log("Save Successful Screenshot")
         })
        )

        // click the warning dropdown
        await extraMoney.click(extraMoney.warningDrodown) 

        //take a snapshot
        await fs.writeFile(`${__dirname}/SmartMachineMidway.png`, 
        await home.driver.takeScreenshot(), "base64",
        (e => {
        if (e) console.error(e)
        else console.log("Save Successful Screenshot")
         })
        )

        // add to cart
        await itemAction.click(itemAction.addToCartButton)

        //remove search term
        await itemAction.click(itemAction.removeSearchTerm)

        await home.click(home.walSearch);
        await home.setInput(home.walSearch, "scotch tape\n")
        await home.driver.sleep(10000)

        //select scotch tape item
        await itemDetail.click(itemDetail.scotchTape)

        //add to cart
        await itemAction.click(itemAction.addToCartButton)

        //click on cart icon
        await itemAction.click(itemAction.cartIcon)

        // click the ship dropdown
        await cartBasket.click(cartBasket.shipDropdown)
        

    let cotilda3 = await extraMoney.getText(extraMoney.lgProtectionAdded)
    expect(cotilda3.toLowerCase()).toContain('5-year')

    let cotilda3a = await extraMoney.getText(extraMoney.smartDryingMachineProtectionAdded)
    expect(cotilda3a.toLowerCase()).toContain('3-year')

    let cotilda3b = await extraMoney.getText(extraMoney.scotchTapeAdded)
    expect(cotilda3b.toLowerCase()).toContain('tape')

    })

})
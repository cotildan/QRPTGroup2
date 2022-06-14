import {Builder, By, Capabilities, 
    until, WebDriver, WebElement} from "selenium-webdriver"

import { Walmart } from "./landingPage";// this is search bar
import { ItemsToSearch } from "./itemsPage"; // Click item on results page
import { AddItems } from "./addItemsPage";// add items to cart and go cart
import { JustCart } from "./cartObjectpage";// view cart and remove items
import {MiniButtons} from "./miniButtons"
const land = new Walmart()
const details = new ItemsToSearch()
const product = new AddItems()
const cartThings = new JustCart()
const blueButtons = new MiniButtons()

describe("Add and remove", () => {
    beforeEach(async () => {
        // opens the browser
        await land.navigate()
        // wait for 10 seconds
        await land.driver.sleep(10000)
    })

    afterAll(async () => {
        // close browser
        await land.driver.quit()
    })

    test('Removing only items from cart test', async () =>{
        // click the search bar
        await land.click(land.walSearch)
        // type smart drying machine and press enter key
        await land.setInput(land.walSearch, "smart drying machine\n")
        //wait for page to load
        await land.driver.sleep(10000)
        // add smart drying machine item to cart
        await blueButtons.click(blueButtons.smartDryingMachine)
        // clear search bar
        await product.click(product.removeSearchTerm)
        
        // click the search bar
        await land.click(land.walSearch)
        // type baby glass bottle and press enter key
        await land.setInput(land.walSearch, "baby glass bottle\n")
        //wait for page to load
        await land.driver.sleep(10000)
        // add baby glass bottle item to cart
        await blueButtons.click(blueButtons.babyGlassBottle)
        // clear search bar
        await product.click(product.removeSearchTerm)

         // click the search bar
         await land.click(land.walSearch)
         // type raspberries and press enter key
         await land.setInput(land.walSearch, "raspberries\n")
         //wait for page to load
         await land.driver.sleep(10000)
         // add raspberries item to cart
         await blueButtons.click(blueButtons.raspberries)
         // clear search bar
         await product.click(product.removeSearchTerm)
        
        // click cart icon
        await product.click(product.cartIcon)
        // wait to for page to load
        await land.driver.sleep(10000)

        // click shipping dropdown
        await cartThings.click(cartThings.shipDropdown)

        //click the remove button for raspberries
        await cartThings.click(cartThings.removeRaspberries)

        // check to see that cart has two items
        let testCase9 = await cartThings.getText(cartThings.emptyCart)
        //test the text from ouahcene has the word empty
        expect(testCase9.toLowerCase()).toContain('empty')

        //let hahaha = await details.lastPageNum.


    })
})
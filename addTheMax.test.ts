import {Builder, By, Capabilities, 
    until, WebDriver, WebElement} from "selenium-webdriver"

import { Walmart } from "./landingPage";// this is search bar

const land = new Walmart()

import { ItemsToSearch } from "./itemsPage"; // Click item on results page

const details = new ItemsToSearch()

import { AddItems } from "./addItemsPage";// add items to cart and go cart

const product = new AddItems()

import { JustCart } from "./cartObjectpage";// view cart and remove items

const cartThings = new JustCart()

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
        //find smart drying machine item and click it
        await details.click(details.smartDryingMachine)
        // add smart drying machine item to cart
        await product.click(product.addToCartButton)
        // click the search bar
        await land.click(land.walSearch)
        // clear search bar
        await product.click(product.removeSearchTerm)
        
        // click the search bar
        await land.click(land.walSearch)
        // type baby glass bottle and press enter key
        await land.setInput(land.walSearch, "baby glass bottle\n")
        //wait for page to load
        await land.driver.sleep(10000)
        //find baby glass bottle item and click it
        await details.click(details.babyGlassBottle)
        // add baby glass bottle item to cart
        await product.click(product.addToCartButton)
        // click the search bar
        await land.click(land.walSearch)
        // clear search bar
        await product.click(product.removeSearchTerm)

         // click the search bar
         await land.click(land.walSearch)
         // type raspberries and press enter key
         await land.setInput(land.walSearch, "raspberries\n")
         //wait for page to load
         await land.driver.sleep(10000)
         //find raspberries item and click it
         await details.click(details.raspberries)
         // add Yoga pants item to cart
         await product.click(product.addToCartButton)
         // click the search bar
         await land.click(land.walSearch)
         // clear search bar
         await product.click(product.removeSearchTerm)

         // click the search bar
        await land.click(land.walSearch)
        // type Yoga pants and press enter key
        await land.setInput(land.walSearch, "yoga pants\n")
        //wait for page to load
        await land.driver.sleep(10000)
        //find Yoga pants item and click it
        await details.click(details.yogaPant)
        // add Yoga pants item to cart
        await product.click(product.addToCartButton)
        
        // click cart icon
        await product.click(product.cartIcon)
        // wait to for page to load
        await land.driver.sleep(10000)

        // click shipping dropdown
        await cartThings.click(cartThings.shipDropdown)

        //click the remove button for smart drying machine 
        await cartThings.click(cartThings.removeSmartDryingMachine)

         //click the remove button for baby glass bottle
         await cartThings.click(cartThings.removeBabyGlassBottle)

          //click the remove button for yoga pants
          await cartThings.click(cartThings.removeYogaPant)

           //click the remove button for raspberries
         await cartThings.click(cartThings.removeRaspberries)

         // check to see that cart is empty
         let ouahcene = await cartThings.getText(cartThings.emptyCart)
         //test the text from ouahcene has the word empty
         expect(ouahcene.toLowerCase()).toContain('empty')

    } )
})
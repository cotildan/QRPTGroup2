import { Builder, By, 
    Capabilities, until, 
    WebDriver, WebElement
} from "selenium-webdriver"

import { Walmart } from "./landingPage" // search
import { ItemsToSearch } from "./itemsPage" // select items 
import { MiniButtons } from "./miniButtons" // +Add Button
import { AddItems } from "./addItemsPage"// Add items to cart
import { JustCart } from "./cartObjectpage" // accessing the cart
import { PanelSelection } from "./panel" // extra panel selections
import { Checkout } from "../practice/checkoutPage" // checkout until payment

const search = new Walmart()
const select = new ItemsToSearch()
const tinyBtn = new MiniButtons()
const addToCart = new AddItems()
const cart = new JustCart()
const bluePanel = new PanelSelection()
const purchase = new Checkout()

describe("checkout process: ship and pickup", () => {
    beforeEach(async () => {
        await search.navigate()
        await search.driver.sleep(100)
    })
    afterAll(async () => {
        await search.driver.quit()
    })

    test("Checkout Process: Shipping and Pickup", async () =>{
        await search.click(search.walSearch)
        //search banana  
        await search.setInput(search.walSearch,  "banana\n")
        // select +Add Button for banana
        await tinyBtn.click(tinyBtn.banana)
        // new search
        await search.click(search.walSearch)
        // clear the search bar
        await addToCart.click(addToCart.removeSearchTerm)
        //search chair  
        await search.setInput(search.walSearch,  "chair\n")
        // select for chair
        await select.click(select.chair)
        // add chair to cart
        await addToCart.click(addToCart.addToCartButton)
       
        // clear the search bar
        await addToCart.click(addToCart.removeSearchTerm)
         //click for  new search
         await search.click(search.walSearch)
        //search baby bottle   
        await search.setInput(search.walSearch,  "baby bottle \n")
        // select +Add Button for baby bottle
        await tinyBtn.click(tinyBtn.babyBottle)

        // clear the search bar
        await addToCart.click(addToCart.removeSearchTerm)
         //click for new search
        await search.click(search.walSearch)
        //search yoga pants   
        await search.setInput(search.walSearch,  "yoga pants\n")
        // select yoga pants item
        await select.click(select.yogaPant)
        //add yoga pants to cart
        await addToCart.click(addToCart.addToCartButton)

        // select cart icon
        await addToCart.click(addToCart.cartIcon)

        // click reserve a time
        await cart.click(cart.reserveTime)

        //change pickup shipping location
        await bluePanel.click(bluePanel.changePickupLocation)
        // select and enter zip code
        await bluePanel.click(bluePanel.pickupZipcode)
        await bluePanel.setInput(bluePanel.pickupZipcode,"97266" )

        //select actual location
        await bluePanel.click(bluePanel.actualPickupLocation)

        // click save button
        await bluePanel.click(bluePanel.panelSaveButton)
        await search.driver.sleep(10000)

        //select the last date spot
        await cart.click(cart.dateButton)
        //select the last time spot (9pm-10pm)
        await cart.click(cart.timeslot)
        //click reserve button
        await bluePanel.click(bluePanel.reserveButton)

        //select shipping address button
        await cart.click(cart.changeAddress)
        //select and enter panel first name
        await cart.click(cart.panelFirstName)
        await cart.setInput(cart.panelFirstName,"Devon")
        //select and enter panel last name
        await cart.click(cart.panelLastName)
        await cart.setInput(cart.panelLastName, "Smith")
        //select and enter panel street address
        await cart.click(cart.panelStreetAddress)
        await cart.setInput(cart.panelStreetAddress, "5705 Southeast Lexington Street")
        //select and enter city
        await cart.click(cart.panelCity)
        await cart.setInput(cart.panelCity, "Portland")
        //select and enter state
        await cart.click(cart.panelState)
        await cart.setInput(cart.panelState, "OR")
        // select and enter zip code
        await cart.click(cart.panelZipCode)
        await cart.setInput(cart.panelZipCode, "97206")
        //select and enter phone number
        await cart.click(cart.panelPhoneNumber)
        await cart.setInput(cart.panelPhoneNumber, "6549642689")
        // click save button
        await bluePanel.click(bluePanel.panelSaveButton)
        await search.driver.sleep(10000)
        
        //click checkout all times
        await cart.click(cart.checkoutAllItemsButton)

        //click continue as guest
        await bluePanel.click(bluePanel.checkoutAsGuest)

        //select and enter email address under curbside picup
        await purchase.click(purchase.email)
        await purchase.setInput(purchase.email, "devon.smith@devmountain.com")

        //click continue button under shipping
        await purchase.click(purchase.pickupContinueButton)

        // testing that user get to payment method section
        let cotilda4 = await purchase.getText(purchase.paymentMethodTitle)
        expect(cotilda4.toLowerCase()).toContain('payment')
    })
})







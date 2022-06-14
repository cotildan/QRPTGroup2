import { By, WebDriver} from "selenium-webdriver"
//import { BasePage } from "./mainBase"
import {BasePage} from "./basePage";

export class Checkout extends BasePage{

    //Curbside pickup
    //first name on photo ID
    firstNameId: By = By.xpath('//input[@id="react-aria-12""]')
    //Last name on photo ID
    lastNameId: By = By.xpath('//input[@id="react-aria-13"]')
    //Email address for order notifcation
    email: By = By.xpath('//input[@name="email"]')
    //Curbside pickup continue button
    pickupContinueButton: By = By.xpath('//button[@class="w_4 w_6 w_AB f5 ph4-l"]')
    //Curbside pickup: Pickup person edit 
    pickupEdit: By = By.xpath('//button[@class="w_4 w_8 w_AA pa0"]')

     //change link under Reserve Time
     reserveChange: By = By.xpath('//button[@aria-label="Change current slot"]')

    //Shipping
    //first name
    shipFirstName: By = By.xpath('//input[@id="react-aria-5"]')
    //last name
    shipLastName: By = By.xpath('//input[@id="react-aria-6"]')
    //street address
    streetAddress: By = By.xpath('//input[@id="addressLineOne"]')
    //Apt, suite number
    aptNum: By = By.xpath('//input[@id="react-aria-7"]')
    //city
    city: By = By.xpath('//input[@id="react-aria-8"]')
    //state dropdown
    state: By = By.xpath('//select[@id="react-aria-9"]')
    //zip code
    zip: By = By.xpath('//input[@id="react-aria-10"]')
    //phone number
    phone: By = By.xpath('//input[@id="react-aria-11"]')
    //save button
    shipSaveButton: By = By.xpath('//button[@class="w_4 w_7 w_AB"]')
    //cancel button
    shipCancel: By = By.xpath('//button[@class="w_4 w_8 w_AB"]')
    //shipping edit button
    shipEdit: By = By.xpath('//button[@class="w_4 w_8 w_AA"]')


    //payment method title
    paymentMethodTitle: By = By.xpath('//h2[@class="w_Fz w_F0 pv1 b f2 pr2 lh-title black-90"]')[0]

    constructor (){
        super({url: "https://www.walmart.com"})
    }
}
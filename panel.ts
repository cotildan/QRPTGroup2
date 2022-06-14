import { By, WebDriver} from "selenium-webdriver"
import { BasePage } from "../practice/mainBase"

export class PanelSelection extends BasePage{


    //change pickup location
    changePickupLocation: By = By.xpath('//button[@aria-label="Change store"]')

    //pickup zip code
    pickupZipcode: By = By.xpath('//input[@aria-label="Enter zip code"]')

    // actual pickup location
    actualPickupLocation: By = By.xpath('//input[@class="w_h"]')[0]

    //reserve button on pickup
    reserveButton: By = By.xpath('//button[@class="w_Bw w_By w_B3 w-100 b f5"]')

    //save button on shipping address
    panelSaveButton: By = By.xpath('//button[@class="w_Bw w_By w_B1 w_B3"]')[1]

    //continue as guest button
    checkoutAsGuest: By = By.xpath('//button[@class="gxo-continue-btn button ghost text-inherit"]')
}
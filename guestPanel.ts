import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class GuestPanel extends BasePage{
    continueAsGuest: By = By.xpath('//*[@id="sign-in-with-email-validation"]/div[2]/button[1]');

    constructor(){
        super({url: "https://www.walmart.com"})
    }

}
import { By, WebDriver } from "selenium-webdriver";
import { BasePage} from "../practice/mainBase";

export class Addons extends BasePage{
    // product protection
    // LG 55" Class TV
    // note: link-identifier="218195189"
    lgProtection: By = By.xpath('//input[@id="ld_radio_109815"]')
    // smart drying machine
    smartDryingMachineProtection: By = By.xpath('//input[@id="ld_radio_424397"]')

    //lg Warning Dropdown
    warningDrodown: By = By.xpath('//button[@class="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6 bw0 bg-white"]')[3]

    // Expert Help
    // LG 55" Class TV
    // note: link-identifier="218195189"
    lgHelp: By = By.xpath('//input[@id="ld_radio_465254"]')

    //lg protection added in cart
    lgProtectionAdded: By = By.xpath('//span[@class="lh-title"]')[1]
    //smart drying machine protection added in cart
    smartDryingMachineProtectionAdded: By = By.xpath('//span[@class="lh-title"]')[3]
    //scotch tape add in cart
    scotchTapeAdded: By = By.xpath('//span[@class="w_Ad"]')[6]

    constructor(){
        super ({url: "https://www.walmart.com"})
    }
}
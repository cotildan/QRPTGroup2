import { By, WebDriver } from "selenium-webdriver";
//import { BasePage } from "./mainBase";
import {BasePage} from "./basePage";

export class MiniButtons extends BasePage{
    // click on mini blue Option button
    //blankets 
    //note: link-identifier="768842299"
    blankets: By = By.xpath('//a[@aria-label="Options - Mainstays Super Soft Plush Blanket, Twin, Indigo"]')

    // click on mini blue +Add button
    //smart drying machine
    smartDryingMachine: By = By.xpath('//button[@aria-label="Add to cart - HOMCOM Compact Laundry Dryer Machine, 1300W, 3.22 Cu. Ft. Electric Portable Clothes Dryer with 7 Drying Modes for Apartment or Dorm, White"]')
    //Baby glass bottle
    babyGlassBottle: By = By.xpath('//button[@aria-label="Add to cart - Philips Avent Natural Glass Baby Bottle, 4oz, 3pk, SCF701/37"]')
    //raspberries
    raspberries: By = By.xpath('//button[@aria-label="Add to cart - Fresh Raspberries, 12 oz"]')
    //banana
    banana: By = By.xpath('//button[@aria-label="Add to cart - Organic Bananas, Bunch"]')
    //baby bottle
    babyBottle: By = By.xpath('//button[@aria-label="Add to cart - Playtex Baby VentAire Complete Tummy Comfort Baby Bottles, 9 oz, 3 Pack"]')

    constructor(){
        super({url: "https://www.walmart.com"})
    }

}
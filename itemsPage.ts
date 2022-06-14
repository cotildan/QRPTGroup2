import { By, WebDriver } from "selenium-webdriver";
//import { BasePage } from "./mainBase";
import {BasePage} from "./basePage";

export class ItemsToSearch extends BasePage{
    //just view these items
    //Jicama
    //quail eggs
    //megalomanium
    //*#$Hs
    //water


    // click on mini blue +Add button
    //Baby glass bottle
    //raspberries
    //banana
    //baby bottle

    //no search result
    noSearchResult: By = By.xpath('//div[@class="tc fw7 f-subheadline-m mb5 f1"]')

    // banana
    banana: By = By.xpath('//a[@link-identifier="51259338"]')
    //chair
    chair: By = By.xpath('//a[@link-identifier="945987874"]')
    // yoga pant
    yogaPant: By = By.xpath('//a[@link-identifier="603888666"]')
    //blankets
    blankets: By = By.xpath('//a[@link-identifier="193829871"]')
    // milk
    milk: By = By.xpath('//a[@link-identifier="10450114"]')
    //Baby glass bottle
    babyGlassBottle: By = By.xpath('//a[@link-identifier="678669893"]')
    //raspberries
    raspberries: By = By.xpath('//a[@link-identifier="44390957"]')

    //smart drying machine
    smartDryingMachine: By = By.xpath('//a[@link-identifier="195610217"]')[0]
    //outdoor furniture set
    outdoorFurnitireSet: By = By.xpath('//a[@link-identifier="986905887"]')
    //gift card
    giftCard: By = By.xpath('//a[@link-identifier="54457638"]')
    //LG 55" Class 4k
    LGTv: By = By.xpath('//a[@link-identifier="892384871"]')
    //scotch tape
    scotchTape: By = By.xpath('//a[@link-identifier="14916449"]')

    //last page number
    lastPageNum: By = By.xpath(('//div[@class="sans-serif ph1 pv2 w4 h4 lh-copy border-box br-100 b--solid mh2-m db tc no-underline gray bg-white b--white-90"]'))

    constructor(){
        super({url: "https://www.walmart.com"})
    }

}
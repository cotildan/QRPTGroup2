import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "../practice/mainBase";

export class Walmart extends BasePage{
    //searchBar: By = By.xpath('//input[@name="q"]')
    walSearch: By = By.xpath('//input[@class="b--none f5 flex-auto lh-solid sans-serif br-pill"]')
    results: By = By.xpath('//div[@class="flex flex-wrap w-100 flex-grow-0 flex-shrink-0 ph2 pr0-xl pl4-xl mt0-xl mt3"]');
   // result: By = By.xpath('//div[@class="flex flex-wrap w-100 flex-grow-0 flex-shrink-0 ph2 pr0-xl pl4-xl mt0-xl mt3"]');
    magnifyButton: By = By.xpath('//button[@class="absolute bn br-100 bg-gold h3 w3"]');
    resultTitle: By = By.xpath('//h2[@class="f4 f3-m lh-title ma0 di"]')

    constructor(){
        super({url: "https://www.walmart.com"})
    }

}
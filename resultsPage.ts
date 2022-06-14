import { Button, By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class ResultsPage extends BasePage{
    addButton: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div[1]/section/div/div[6]/div/div/div/div[1]/div[2]/div[2]/div/button');   
    plusButton: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div[1]/section/div/div[6]/div/div/div/div[1]/div[2]/div[2]/div/div/button[2]');
    minusButton: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div[1]/section/div/div[6]/div/div/div/div[1]/div[2]/div[2]/div/div/button[1]');
    tvResult: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[2]/div/div/a');
    //Click on this ^ to go to item Description
    //^ These 4 are specifically when searching 'LG 55" Class 4K'
    phoneResult: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[2]/div/div/a');
    blueColorOption: By = By.xpath('//*[@id="__next"]/div[1]/div/div/div[2]/div/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[2]/div/div/div/div[1]/div[3]/div/div[2]/a');
    //^these 2 are specifically when searching "LG5"

    constructor(){
        super({url: "https://www.walmart.com"})
    }

}
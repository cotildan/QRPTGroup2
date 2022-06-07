
//writing some words here
//fdgjndfkgn

import{
    Builder, By,
    until, Capabilities,
    WebDriver, WebElement
} from "selenium-webdriver"
import { elementLocated } from "selenium-webdriver/lib/until";

export class basePage {
    driver: WebDriver;
    url: string = 'https://www.walmart.com/'
    searchBar: By = By.name('q')


    async navigate (){
        await this.driver.get(this.url);
        await this.driver.wait(elementLocated(this.searchBar))
    }
}

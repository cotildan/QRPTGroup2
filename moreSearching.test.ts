import {Builder, By, 
    Capabilities, until, 
    WebDriver, WebElement
} from "selenium-webdriver"

import { Walmart } from "./landingPage" // search something

import { ItemsToSearch } from "./itemsPage" // result page

/*
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build()
*/

const work = new Walmart()
const nop = new ItemsToSearch()

describe("basicSearch", () => {
    beforeEach(async () => {
        // opens a browser for walmart.com
        await work.navigate()
        //give opportunity to load waiting 10sec
        await work.driver.sleep(10000) 
    })

    //happens when all tests are done
    afterAll(async () => {
       await work.driver.quit()
    })

    test('Jicama Search', async () => {
        await work.click(work.walSearch);
        await work.setInput(work.walSearch, "Jicama\n")
        await work.driver.sleep(10000)

    let cotilda = await work.getText(work.resultTitle)
    expect(cotilda.toLowerCase()).toContain('jicama')


    })

    test('Quail Egg Search', async () =>{
        await work.click(work.walSearch)
        await work.setInput(work.walSearch, "Quail Eggs\n")
        await work.driver.sleep(10000)

        let cotildaB = await work.getText(work.resultTitle)
       expect(cotildaB.toLowerCase()).toContain('quail egg')
        
    })
    
    test('Megalomanium Search', async () =>{
        await work.click(work.walSearch)
        await work.setInput(work.walSearch, "Megalomanium\n")
        await work.driver.sleep(10000)

        let cotildaC = await nop.getText(nop.noSearchResult)
        expect(cotildaC.toLowerCase()).toContain('Megalomanium')
    
    })
    test('*#$Hs search', async () =>{
        await work.click(work.walSearch)
        await work.setInput(work.walSearch, "*#$Hs\n")
        await work.driver.sleep(10000)

        let cotildaD = await nop.getText(nop.noSearchResult)
        expect(cotildaD.toLowerCase()).toContain("*#$Hs")
    
    })
    
})
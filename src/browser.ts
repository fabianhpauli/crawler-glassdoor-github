import puppeteer from 'puppeteer';

class Browser {

    constructor(){
    }

    async getBrowser():Promise<puppeteer.Browser>{
        const browser = await puppeteer.launch();
        browser.createIncognitoBrowserContext();

        // const page = await browser.newPage();
        // page.setDefaultTimeout(5000)
        // page.setDefaultNavigationTimeout(0)
        
        return browser
    }

}

export { Browser }
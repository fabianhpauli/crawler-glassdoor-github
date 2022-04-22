import 'dotenv/config'
import puppeteer from 'puppeteer';

async function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


class Browser {

    constructor() {
        let browser: puppeteer.Browser
    }

    async getBrowser(): Promise<puppeteer.Browser> {
        const browser = await puppeteer.launch({
            headless: false
        });

        return browser
    }
    async getBrowserIncognito(): Promise<puppeteer.Browser> {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
            headless: false, args: [
                '--incognito',
            ],
        });

        return browser
    }
    async getLinkedinAuthenticatedPage(): Promise<puppeteer.Page> {
        // const context = await (await this.getBrowser()).createIncognitoBrowserContext()
        // const page = await context.newPage();
        const browser = await this.getBrowserIncognito()
        const page = (await browser.pages())[0]

        page.setDefaultTimeout(5000)
        page.setDefaultNavigationTimeout(0)

        await page.goto(process.env.LINKEDIN_URL_REPORT)
        page.waitForNavigation()
        await page.waitForSelector('#username');
        await page.type('input[id="username"]', process.env.LINKEDIN_USER);
        await page.type('input[id="password"]', process.env.LINKEDIN_PASS);
        await page.click('[type="submit"]')
        await page.waitForNavigation()

        return page
    }
    async getCrunchbaseAuthenticatedPage(): Promise<puppeteer.Page> {
        const browser = await this.getBrowserIncognito()
        const page = (await browser.pages())[0]
        await page.setUserAgent(
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
        )

        page.setDefaultTimeout(5000)
        page.setDefaultNavigationTimeout(0)

        await page.goto(process.env.CRUNCHBASE_URL)
        await wait(3000)
        page.waitForNavigation()
        await page.waitForSelector('[id="mat-input-1"]');
        await page.type('input[id="mat-input-1"]', process.env.CRUNCHBASE_USER, { delay: 3000 });
        await page.type('input[id="mat-input-2"]', process.env.CRUNCHBASE_PASS, { delay: 3000 });
        await page.click('[class="mat-focus-indicator login mat-raised-button mat-button-base mat-primary"]')
        await page.waitForNavigation()

        return page
    }

}

export { Browser }
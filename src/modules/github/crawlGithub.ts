import puppeteer from 'puppeteer';
class crawlGithub {
    constructor(
    ) { }

    async execute(url: string, browser: puppeteer.Browser): Promise<Object> {

        let language = { "url": url };
        try {
            const page = await browser.newPage();
            page.setDefaultTimeout(5000)
            page.setDefaultNavigationTimeout(0)
            await page.goto(url)
            await page.waitForSelector('.ml-0');

            const listOfLanguages = await page.$$('.ml-0')
            for (let index = 0; index < listOfLanguages.length; index++) {
                language[index + 1] = await (await listOfLanguages[index].getProperty('innerText')).toString().trimEnd().trimStart().replace("JSHandle:", "");
            }
            await page.close();
        } catch (error) {
            console.log(`url: ${url} mensagem ${error.message}`)
        }
        return language
    }
}

export { crawlGithub } 
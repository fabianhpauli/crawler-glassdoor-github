import puppeteer from 'puppeteer';
import fetch from 'node-fetch'
class crawlGlassdoor{
    constructor(
    ){}

    async execute(url:string): Promise<string>{
        const req = await fetch(url)
        const res = await req.text()

        // Ratings
        const rating_starts_at : number = res.indexOf('EmployerRatings')
        const rating_ends_at : number = res.indexOf('ratedCeo')
        const ratings = JSON.parse('{' + res.substring(rating_starts_at+17 , rating_ends_at-2).replaceAll('\\"','"') + '}')
        
        // Recommend
        const recommend_starts_at : number = res.indexOf('data-percentage="')
        const recommend_ends_at : number = res.indexOf('id="EmpStats_Recommend"')
        const recommend = res.substring(recommend_starts_at+17, recommend_ends_at ).replaceAll('\" ','')
    
        ratings.recomend = recommend;
        ratings.url = url;
        console.log(url)
    
        return ratings
    }
    async executes(url: string, browser: puppeteer.Browser){
        let evaluation = { "url": url };
        try {
            const page = await browser.newPage();
            page.setDefaultTimeout(5000)
            page.setDefaultNavigationTimeout(0)
            await page.goto(url)
            await page.waitForSelector('.eiRatingsDetails');
            const listOfLanguages = await page.$$('.ml-0')
            
            
            await page.close();
        } catch (error) {
            console.log(`url: ${url} mensagem ${error.message}`)
        }
        return evaluation
    }
}

export {crawlGlassdoor} 
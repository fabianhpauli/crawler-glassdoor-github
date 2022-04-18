import { Browser } from "../../util/browser";
import { crawlCrunchbase } from "./crawlCrunchbase";
import Urls from "../../util/urls"
import { Page } from "puppeteer";


class extractCrunchbase {
    constructor() { }

    async execute(authenticatedPage : Page) : Promise<Object[]> {
        const data = [];

        const crawlCrunchCrawl = new crawlCrunchbase();
        const list = Urls

        // const authenticatedPage = await new Browser().getLinkedinAuthenticatedPage()
        
        for (var i = 0; i < list.length; i++) {
            let crunchbaseData:Object;
            console.log(`Executando ${i+1} de ${list.length}`)
            if(list[i].company && list[i].crunchbase){
                crunchbaseData = await crawlCrunchCrawl.execute(list[i].company, list[i].crunchbase,authenticatedPage  )
            }
            data.push(crunchbaseData)
        }

        return data;
    }
}

export { extractCrunchbase } 
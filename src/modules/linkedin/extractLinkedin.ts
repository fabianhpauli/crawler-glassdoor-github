import { Browser } from "../../util/browser";
import { crawlLinkedin } from "./crawlLinkedin";
import Urls from "../../util/urls"
import { Page } from "puppeteer";


class extractLinkedin {
    constructor() { }

    async execute(authenticatedPage:Page) : Promise<Object[]> {
        const data = [];

        const linkedinCrawl = new crawlLinkedin();
        const list = Urls

        // const authenticatedPage = await new Browser().getLinkedinAuthenticatedPage()
        
        for (var i = 0; i < list.length; i++) {
            let linkedinData:Object;
            console.log(`Executando ${i+1} de ${list.length}`)
            if(list[i].company){
                linkedinData = await linkedinCrawl.execute(list[i].company, authenticatedPage)
            }
            data.push(linkedinData)
        }

        return data;
    }
}

export { extractLinkedin } 
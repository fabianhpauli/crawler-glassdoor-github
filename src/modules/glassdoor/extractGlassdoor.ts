import { Browser } from "../../util/browser";
import { crawlGlassdoor } from "./crawlGlassdoor";
import Urls from "../../util/urls"

class extractGlassdoor {
    constructor() { }

    async execute() : Promise<Object[]> {
        const data = [];

        const glassdoor = new crawlGlassdoor();
        const list = Urls
        const tab = await new Browser().getBrowser()
        
        for (var i = 0; i < list.length; i++) {
            let page: string
            if(list[i].glassdoor){
                 page = await glassdoor.execute(list[i].glassdoor)
            }
            data.push(page)
            console.log(`Executando ${i+1} de ${list.length}`)
        }        
        return data;
    }
}

export { extractGlassdoor } 
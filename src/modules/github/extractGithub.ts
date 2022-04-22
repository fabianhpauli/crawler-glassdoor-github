import { crawlGithub } from "./crawlGithub";
import { Browser } from "../../util/browser"
import Urls from "../../util/urls"

class extractGithub {
    constructor() { }

    async execute() : Promise<Object[]>  {
        const data = [];

        const github = new crawlGithub();
        const list = Urls

        const tab = await new Browser().getBrowser()
        
        for (var i = 0; i < list.length; i++) {
            let page:Object;
            console.log(`Executando ${i+1} de ${list.length}`)
            if(list[i].github){
                page = await github.execute(list[i].github,list[i].company, tab)
            }else{
                page = { company:  list[i].company, url: list[i].github}
                
            }
            data.push(page)
        }
        await tab.close()
        return data;
    }
}

export { extractGithub } 
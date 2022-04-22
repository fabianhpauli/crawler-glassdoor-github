import { Browser } from "../../util/browser";
import { crawlGlassdoor } from "./crawlGlassdoor";
import Urls from "../../util/urls"


interface IData {
    url: string;
    ceoRating: string
    ceoRatingsCount: string
    businessOutlookRating: string
    compensationAndBenefitsRating: string
    cultureAndValuesRating: string
    careerOpportunitiesRating: string
    overallRating: string
    recommendToFriendRating: string
    seniorManagementRating: string
    workLifeBalanceRating: string
    reviewCount: string
    diversityAndInclusionRating: string
    recomend: string
}
class extractGlassdoor {
    constructor() { }

    async execute(): Promise<Object[]> {
        const data = [];

        const glassdoor = new crawlGlassdoor();
        const list = Urls
        // const tab = await new Browser().getBrowser()

        let pageData: IData;
        for (var i = 0; i < list.length; i++) {
            if (list[i].glassdoor) {
                pageData = await glassdoor.execute(list[i].glassdoor, list[i].company)
            }
            try {
                pageData.url = list[i].glassdoor
                data.push(pageData)
                pageData = null
                console.log(`Executando ${i + 1} de ${list.length}`)
            } catch (error) {
                console.log(list[i].company + "  "+ error.message)
            } 
        }
        return data;
    }
}

export { extractGlassdoor, IData } 
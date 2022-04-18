import 'dotenv/config'
import fetch from 'node-fetch'
import puppeteer from 'puppeteer';

async function wait(ms: number) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

async function getInfoOverview(overview): Promise<Object> {
    let index = 0

    let topFunctions = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (index = 1; index < 5; index++) {
        topFunctions += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    topFunctions = JSON.parse(topFunctions.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let mostDeparturesTo = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 10; index++) {
        mostDeparturesTo += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    mostDeparturesTo = JSON.parse(mostDeparturesTo.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let mostHiresFrom = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 15; index++) {
        mostHiresFrom += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    mostHiresFrom = JSON.parse(mostHiresFrom.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let topSkills = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 20; index++) {
        topSkills += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    topSkills = JSON.parse(topSkills.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let fastGrowingSkills = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 25; index++) {
        fastGrowingSkills += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    fastGrowingSkills = JSON.parse(fastGrowingSkills.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let topSchools = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 30; index++) {
        topSchools += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    topSchools = JSON.parse(topSchools.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    let topFieldsOfStudy = "{'" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    for (; index < 35; index++) {
        topFieldsOfStudy += ", '" + (await (await overview[index].getProperty('innerText')).jsonValue()).toString().replace("\n\t", "':'").replace("\n", "':'") + "'"
    }
    topFieldsOfStudy = JSON.parse(topFieldsOfStudy.replaceAll("':'':'", "':'").replaceAll("'", '"') + "}")

    const overviewResult = { topFunctions, mostDeparturesTo, mostHiresFrom, topSkills, fastGrowingSkills, topSchools, topFieldsOfStudy }
    console.log(overviewResult)
    return overviewResult
}

class crawlCrunchbase {
    constructor(
    ) { }

    async executes(company: string, url: string): Promise<string> {
        const req = await fetch(url)
        const res = await req.text()

        // Ratings
        const rating_starts_at: number = res.indexOf('EmployerRatings')
        const rating_ends_at: number = res.indexOf('ratedCeo')
        const ratings = JSON.parse('{' + res.substring(rating_starts_at + 17, rating_ends_at - 2).replaceAll('\\"', '"') + '}')

        // Recommend
        const recommend_starts_at: number = res.indexOf('data-percentage="')
        const recommend_ends_at: number = res.indexOf('id="EmpStats_Recommend"')
        const recommend = res.substring(recommend_starts_at + 17, recommend_ends_at).replaceAll('\" ', '')

        ratings.recomend = recommend;
        ratings.url = url;
        console.log(url)

        return ratings
    }


    async execute(company: string, crunchbase:string, page: puppeteer.Page): Promise<Object> {

        let language = { "company": company };
        let overviewResult: Object
        const urlReport = process.env.CRUNCHBASE_URL

        try {
            await page.goto(crunchbase)
            page.waitForNavigation()

            // Filter company
            await page.waitForSelector('[class="component--field-formatter field-type-integer link-accent ng-star-inserted"]', { timeout: 10000 });

            /** Overview */
            const cdbank = await (await (await page.$('[class="component--field-formatter field-type-integer link-accent ng-star-inserted"]')).getProperty('innerText')).jsonValue()
            const overview = await page.$$('[data-test-overview-table-item]')
            console.log(cdbank)


            // overviewResult = await getInfoOverview(overview)
        } catch (error) {
            console.log(`url: ${company} mensagem ${error.message}`)
        }
        // await page.close();
        return overviewResult
    }

}

export { crawlCrunchbase } 
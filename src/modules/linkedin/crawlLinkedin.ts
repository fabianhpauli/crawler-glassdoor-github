import 'dotenv/config'
import puppeteer from 'puppeteer';

async function wait(ms: number) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

async function getInfoOverview(overview) : Promise<Object>{
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

    const overviewResult = { topFunctions, mostDeparturesTo, mostHiresFrom, topSkills, fastGrowingSkills, topSchools, topFieldsOfStudy}
    console.log(overviewResult)
    return overviewResult
}

class crawlLinkedin {
    constructor(
    ) { }


    async execute(company: string, page: puppeteer.Page): Promise<Object> {

        let language = { "company": company };
        let overviewResult: Object
        const urlReport = process.env.LINKEDIN_URL_REPORT
        try {
            await page.goto(urlReport)
            page.waitForNavigation()

            // Filter company
            await page.waitForSelector('[class="artdeco-typeahead__input artdeco-pill__input facet-pill__typeahead-input"]', { timeout: 10000 });
            await page.click('[class="artdeco-typeahead__input artdeco-pill__input facet-pill__typeahead-input"]')
            await page.type('[class="artdeco-typeahead__input artdeco-pill__input facet-pill__typeahead-input"]', company);
            await wait(1000);
            await page.waitForSelector(`[alt="${company}"]`, { timeout: 5000 });
            await page.click(`[alt="${company}"]`)
            await page.waitForSelector('[id="ember81"]', { timeout: 5000 });
            await wait(3000);
            await page.click('#ember81')
            
            
            page.waitForNavigation()
            await page.waitForSelector('[class="t-32 t-light overview-layout__top-card-value"]', { timeout: 10000 });
            
            /** Overview */
            await wait(2000);
            const employees = await (await (await page.$('[class="t-32 t-light overview-layout__top-card-value"]')).getProperty('innerText')).jsonValue()
            const employeesPercent =
                await (
                    await (
                        await page
                            .$('[class="overview-layout__top-card-rate artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view"]'))
                        .getProperty('innerText')
                ).jsonValue()


            const overview = await page.$$('[data-test-overview-table-item]')
            overviewResult = await getInfoOverview(overview)
            overviewResult = {...overviewResult,employees,employeesPercent}
            const controle = JSON.stringify(overviewResult);
            overviewResult = JSON.parse(controle);


            // console.log(overviewResult)

            // https://www.linkedin.com/insights/report/create
            // https://www.linkedin.com/insights/report/create/company/experienced
            // https://www.linkedin.com/uas/login?session_redirect=%2Finsights%2Freport%2Fcreate&fromSignIn=true&trk=talent-intelligence-web

        } catch (error) {
            console.log(`url: ${company} mensagem ${error.message}`)
        }
        // await page.close();
        return overviewResult
    }
}

export { crawlLinkedin } 
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
    // console.log(overviewResult)
    return overviewResult
}

async function explodeDataOverview(overviewResult : Object) {
    let  explodedData : Object;

    const topFunctions = Object.keys(overviewResult.topFunctions)
    const topFunctionsValues = Object.values(overviewResult.topFunctions)
    const mostDeparturesTo = Object.keys(overviewResult.mostDeparturesTo)
    const mostDeparturesToValues = Object.values(overviewResult.mostDeparturesTo)
    const mostHiresFrom = Object.keys(overviewResult.mostHiresFrom)
    const mostHiresFromValues = Object.values(overviewResult.mostHiresFrom)
    const topSkills = Object.keys(overviewResult.topSkills)
    const topSkillsValues = Object.values(overviewResult.topSkills)
    const fastGrowingSkills = Object.keys(overviewResult.fastGrowingSkills)
    const fastGrowingSkillsValues = Object.values(overviewResult.fastGrowingSkills)
    const topSchools = Object.keys(overviewResult.topSchools)
    const topSchoolsValues = Object.values(overviewResult.topSchools)
    const topFieldsOfStudy = Object.keys(overviewResult.topFieldsOfStudy)
    const topFieldsOfStudyValues = Object.values(overviewResult.topFieldsOfStudy)
    
    explodedData = {
        
        // topFunctions
        topFunctions_a: topFunctions[0],
        topFunctions_b: topFunctions[1],
        topFunctions_c: topFunctions[2],
        topFunctions_d: topFunctions[3],
        topFunctions_e: topFunctions[4],
        topFunctionsValues_a: topFunctionsValues[0],
        topFunctionsValues_b: topFunctionsValues[1],
        topFunctionsValues_c: topFunctionsValues[2],
        topFunctionsValues_d: topFunctionsValues[3],
        topFunctionsValues_e: topFunctionsValues[4],
        
        // mostDeparturesTo
        mostDeparturesTo_a: mostDeparturesTo[0],
        mostDeparturesTo_b: mostDeparturesTo[1],
        mostDeparturesTo_c: mostDeparturesTo[2],
        mostDeparturesTo_d: mostDeparturesTo[3],
        mostDeparturesTo_e: mostDeparturesTo[4],
        mostDeparturesToValues_a: mostDeparturesToValues[0],
        mostDeparturesToValues_b: mostDeparturesToValues[1],
        mostDeparturesToValues_c: mostDeparturesToValues[2],
        mostDeparturesToValues_d: mostDeparturesToValues[3],
        mostDeparturesToValues_e: mostDeparturesToValues[4],
        
        // mostHiresFrom
        mostHiresFrom_a: mostHiresFrom[0],
        mostHiresFrom_b: mostHiresFrom[1],
        mostHiresFrom_c: mostHiresFrom[2],
        mostHiresFrom_d: mostHiresFrom[3],
        mostHiresFrom_e: mostHiresFrom[4],
        mostHiresFromValues_a: mostHiresFromValues[0],
        mostHiresFromValues_b: mostHiresFromValues[1],
        mostHiresFromValues_c: mostHiresFromValues[2],
        mostHiresFromValues_d: mostHiresFromValues[3],
        mostHiresFromValues_e: mostHiresFromValues[4],
        
        // topSkills
        topSkills_a: topSkills[0],
        topSkills_b: topSkills[1],
        topSkills_c: topSkills[2],
        topSkills_d: topSkills[3],
        topSkills_e: topSkills[4],
        topSkillsValues_a: topSkillsValues[0],
        topSkillsValues_b: topSkillsValues[1],
        topSkillsValues_c: topSkillsValues[2],
        topSkillsValues_d: topSkillsValues[3],
        topSkillsValues_e: topSkillsValues[4],
        
        // fastGrowingSkills
        fastGrowingSkills_a: fastGrowingSkills[0],
        fastGrowingSkills_b: fastGrowingSkills[1],
        fastGrowingSkills_c: fastGrowingSkills[2],
        fastGrowingSkills_d: fastGrowingSkills[3],
        fastGrowingSkills_e: fastGrowingSkills[4],
        fastGrowingSkillsValues_a: fastGrowingSkillsValues[0],
        fastGrowingSkillsValues_b: fastGrowingSkillsValues[1],
        fastGrowingSkillsValues_c: fastGrowingSkillsValues[2],
        fastGrowingSkillsValues_d: fastGrowingSkillsValues[3],
        fastGrowingSkillsValues_e: fastGrowingSkillsValues[4],
        
        // topSchools
        topSchools_a: topSchools[0],
        topSchools_b: topSchools[1],
        topSchools_c: topSchools[2],
        topSchools_d: topSchools[3],
        topSchools_e: topSchools[4],
        topSchoolsValues_a: topSchoolsValues[0],
        topSchoolsValues_b: topSchoolsValues[1],
        topSchoolsValues_c: topSchoolsValues[2],
        topSchoolsValues_d: topSchoolsValues[3],
        topSchoolsValues_e: topSchoolsValues[4],

        // topFieldsOfStudy
        topFieldsOfStudy_a: topFieldsOfStudy[0],
        topFieldsOfStudy_b: topFieldsOfStudy[1],
        topFieldsOfStudy_c: topFieldsOfStudy[2],
        topFieldsOfStudy_d: topFieldsOfStudy[3],
        topFieldsOfStudy_e: topFieldsOfStudy[4],
        topFieldsOfStudyValues_a: topFieldsOfStudyValues[0],
        topFieldsOfStudyValues_b: topFieldsOfStudyValues[1],
        topFieldsOfStudyValues_c: topFieldsOfStudyValues[2],
        topFieldsOfStudyValues_d: topFieldsOfStudyValues[3],
        topFieldsOfStudyValues_e: topFieldsOfStudyValues[4],

    }
    
    return explodedData
}

class crawlLinkedin {
    constructor(
    ) { }


    async execute(company: string, page: puppeteer.Page): Promise<Object> {

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

            const overview = await page.$$('[data-test-overview-table-item]');
            overviewResult = await getInfoOverview(overview);
            overviewResult = await explodeDataOverview(overviewResult)

            overviewResult = {...overviewResult,employees,employeesPercent,company};
            const controle = JSON.stringify(overviewResult);
            overviewResult = JSON.parse(controle);

        } catch (error) {
            overviewResult = {company};
            console.log(`url: ${company} mensagem ${error.message}`)
        }finally{
            return overviewResult
        }
    }
}

export { crawlLinkedin } 
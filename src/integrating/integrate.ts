import 'dotenv/config'
import { GoogleSpreadsheet } from 'google-spreadsheet';

class sheetIntegration {

    constructor() { }

    async updateGlassdoorData(dataGlassdoor) {
        const doc = new GoogleSpreadsheet('1vjAiZ6aeuz3tugvEuO8lvJjvZ80RVMY3-Ja-0KcPjXw');

        doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL_GOOGLE.replace(/\\n/gm, '\n'),
            private_key: process.env.PRIVATE_KEY_GOOGLE.replace(/\\n/gm, '\n'),
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByTitle["glassdoor"]
        await sheet.clear()
        await sheet.setHeaderRow(Object.keys(dataGlassdoor[0]), 1);

        await sheet.addRows(dataGlassdoor);

    }
    async updateGithubData(dataGithub) {

        const doc = new GoogleSpreadsheet('1vjAiZ6aeuz3tugvEuO8lvJjvZ80RVMY3-Ja-0KcPjXw');

        doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL_GOOGLE.replace(/\\n/gm, '\n'),
            private_key: process.env.PRIVATE_KEY_GOOGLE.replace(/\\n/gm, '\n'),
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByTitle["github"]
        await sheet.clear()
        await sheet.setHeaderRow(["1", "2", "3", "4", "5", "url","company"], 1);

        await sheet.addRows(dataGithub);

    }
    async updateLinkedin(dataLinkedin) {

        const doc = new GoogleSpreadsheet('1vjAiZ6aeuz3tugvEuO8lvJjvZ80RVMY3-Ja-0KcPjXw');

        doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL_GOOGLE.replace(/\\n/gm, '\n'),
            private_key: process.env.PRIVATE_KEY_GOOGLE.replace(/\\n/gm, '\n'),
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByTitle["linkedin"]
        await sheet.clear()

        await sheet.resize({ rowCount: 1000, columnCount: 200 });
        
        
        await sheet.setHeaderRow(Object.keys(dataLinkedin[0]), 1);

        await sheet.addRows(dataLinkedin);

    }
   


}
export { sheetIntegration }


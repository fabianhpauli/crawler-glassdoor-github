import 'dotenv/config'
import express from 'express';
import { extractGlassdoor } from "./modules/glassdoor/extractGlassdoor"
import { extractGithub } from "./modules/github/extractGithub"
import { extractLinkedin } from "./modules/linkedin/extractLinkedin"
import { extractCrunchbase } from "./modules/crunchBase/extractCrunchbase"
import { Browser } from "../src/util/browser";
import ObjectsToCsv from 'objects-to-csv';
import jsonexport from 'jsonexport'

const app = express();
const authenticatedLinkedin = new Browser().getLinkedinAuthenticatedPage()
// const authenticatedCrunchbase = new Browser().getCrunchbaseAuthenticatedPage()

app.use(express.json());

app.get("/glassdoor", async (req, res) => {
    const arquivos = [];
    const currentDateArq = new Date()
        .toString()
        .replaceAll("-", "_")
        .replaceAll(":", "_")
        .replaceAll(" ", "_")
        .substring(4, 24);
    /** Glassdoor */
    const arquivoGlassdoor = `glassdoor${currentDateArq}.csv`
    const glassdoor = new extractGlassdoor();
    const dataGlassdoor = await glassdoor.execute();
    const glassdoorCSV = new ObjectsToCsv(dataGlassdoor);
    /** Save to file: */
    await glassdoorCSV.toDisk(`./src/export/${arquivoGlassdoor}`);
    arquivos.push(arquivoGlassdoor)
    return res.send(arquivos);
});

app.get("/github", async (req, res) => {
    const arquivos = [];
    const currentDateArq = new Date()
        .toString()
        .replaceAll("-", "_")
        .replaceAll(":", "_")
        .replaceAll(" ", "_")
        .substring(4, 24);
    /** Github */
    const arquivoGithub = `github${currentDateArq}.csv`
    const github = new extractGithub();
    const dataGithub = await github.execute();
    const githubCSV = new ObjectsToCsv(dataGithub);
    // Save to file:
    await githubCSV.toDisk(`./src/export/${arquivoGithub}`);
    arquivos.push(arquivoGithub)
    return res.send(arquivos);
});

app.get("/linkedin", async (req, res) => {
    const arquivos = [];
    const currentDateArq = new Date()
        .toString()
        .replaceAll("-", "_")
        .replaceAll(":", "_")
        .replaceAll(" ", "_")
        .substring(4, 24);

    /** Linkedin */
    const arquivoLinkedin = `linkedin${currentDateArq}.csv`
    const linkedin = new extractLinkedin();
    const dataLinkedin = await linkedin.execute(await authenticatedLinkedin);

    jsonexport(dataLinkedin,function(err, csv){
        if(err) return console.log(err);
        console.log(csv);
    });
    const csvfile = new ObjectsToCsv(dataLinkedin);
    // Save to file:
    await csvfile.toDisk(`./src/export/${arquivoLinkedin}`);
    arquivos.push(arquivoLinkedin)

    return res.send(arquivos);
});

// app.get("/crunchbase", async (req, res) => {
//     const arquivos = [];
//     const currentDateArq = new Date()
//         .toString()
//         .replaceAll("-", "_")
//         .replaceAll(":", "_")
//         .replaceAll(" ", "_")
//         .substring(4, 24);

//     /** Linkedin */
//     const arquivoCrunchBase = `CrunchBase${currentDateArq}.csv`
//     const crunchBase = new extractCrunchbase();
//     const dataCrunchbase = await crunchBase.execute(await authenticatedCrunchbase);
//     const csvfile = new ObjectsToCsv(dataCrunchbase);
//     // Save to file:
//     await csvfile.toDisk(`./src/export/${arquivoCrunchBase}`);
//     arquivos.push(arquivoCrunchBase)

//     return res.send(arquivos);
// });


app.listen(3535, () => console.log("Server is running! it's alive, it's alive!"))
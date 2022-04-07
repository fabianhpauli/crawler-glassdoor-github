import express from 'express';
import { Router } from "express";
import { extractGlassdoor } from "./modules/glassdoor/extractGlassdoor"
import { extractGithub } from "./modules/github/extractGithub"
import ObjectsToCsv from 'objects-to-csv'


const app = express();
const router = Router();

app.use(express.json());

app.get("/extract", async (req, res) => {

    const excecutar = [
        // "github"
        // ,
        "glassdoor"
    ]

    const arquivos = [];
    const currentDateArq = new Date()
        .toString()
        .replaceAll("-", "_")
        .replaceAll(":", "_")
        .replaceAll(" ", "_")
        .substring(4, 24);

    if (excecutar.indexOf("glassdoor")>-1) {
        /** Glassdoor */
        const arquivoGlassdoor = `glassdoor${currentDateArq}.csv`
        const glassdoor = new extractGlassdoor();
        const dataGlassdoor = await glassdoor.execute();
        const glassdoorCSV = new ObjectsToCsv(dataGlassdoor);
        /** Save to file: */
        await glassdoorCSV.toDisk(`./src/export/${arquivoGlassdoor}`);
        arquivos.push(arquivoGlassdoor)
        
    }
    if (excecutar.indexOf("github")) {
        /** Github */
        const arquivoGithub = `github${currentDateArq}.csv`
        const github = new extractGithub();
        const dataGithub = await github.execute();
        // return res.send(dataGithub)
        const githubCSV = new ObjectsToCsv(dataGithub);
        // Save to file:
        await githubCSV.toDisk(`./src/export/${arquivoGithub}`);
        arquivos.push(arquivoGithub)
    }
        
        return res.send(arquivos);
    });
    

app.listen(3535, () => console.log("Server is running! it's alive, it's alive!"))
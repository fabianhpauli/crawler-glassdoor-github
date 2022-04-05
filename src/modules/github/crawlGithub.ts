import fetch from 'node-fetch'

class crawlGithub {
    constructor(
    ) { }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async execute(url: string): Promise<string[]> {
        let match: RegExpExecArray;
        let req = await fetch(url)
        let language = {"first":null , "second":null, "third":null, "fourth":null, "fifth":null, "sixth":null, "seventh":null};
        let attempts = 1
        let maxAttempts = 10
        const languages = []

        while (maxAttempts>attempts) {
            if (req.ok) {
                const res = await req.text()
                const regex_languages: RegExp = /(?<=\?language=)[a-zA-Z]*/gm;
                
                // languages
                match = regex_languages.exec(res)
                
                let i : number = 0;
                while (match) {
                    console.log(i)
                    switch (i) {
                        case 0:
                            console.log("caiu no 1")
                            language.first = match[0]
                            break;
                        case 1:
                            language.second = match[0]
                            break;
                        case 2:
                            language.third = match[0]
                            break;
                        case 3:
                            language.fourth = match[0]
                            break;
                        case 4:
                            language.fifth = match[0]
                            break;
                        case 5:
                            language.sixth = match[0]
                            break;
                        case 6:
                            language.seventh = match[0]
                            break;
                        default:
                            break;
                    }
                    match = regex_languages.exec(res)
                    i++;
                }
                languages.push(language)

                
                break;
            }
            await this.delay(3000);
            attempts = attempts++;
            req = await fetch(url)
        }
        
        await this.delay(1000);
        return languages
    }
}

export { crawlGithub } 
import fetch from 'node-fetch'

class crawlGlassdoor{
    constructor(
    ){}
    async execute(url:string): Promise<string>{
        const req = await fetch(url)
        const res = await req.text()

        // Ratings
        const rating_starts_at : number = res.indexOf('EmployerRatings')
        const rating_ends_at : number = res.indexOf('ratedCeo')
        const ratings = JSON.parse('{' + res.substring(rating_starts_at+17 , rating_ends_at-2).replaceAll('\\"','"') + '}')
        
        // Recommend
        const recommend_starts_at : number = res.indexOf('data-percentage="')
        const recommend_ends_at : number = res.indexOf('id="EmpStats_Recommend"')
        const recommend = res.substring(recommend_starts_at+17, recommend_ends_at ).replaceAll('\" ','')
    
        ratings.recomend = recommend;
        console.log(url)
    
        return ratings
    }
}

export {crawlGlassdoor} 
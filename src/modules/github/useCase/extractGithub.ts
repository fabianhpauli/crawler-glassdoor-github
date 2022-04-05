import { crawlGithub } from "../crawlGithub";

class extractGithub {
    constructor() { }

    async execute() : Promise<Object[]>  {
        const data = [];

        const github = new crawlGithub();
        const list = []
            // list.push({ "company": "Itaú", "url": "https://github.com/itau" })
            // list.push({ "company": "Zup Innovation", "url": "https://github.com/ZupIT" })
            // list.push({ "company": "StackSpot", "url": "https://github.com/stack-spot" })
            // list.push({ "company": "PagSeguro", "url": "https://github.com/pagseguro" })
            // list.push({ "company": "PagBank", "url": "https://github.com/pagbank" })
            // list.push({ "company": "Mercado Livre", "url": "https://github.com/mercadolibre" })
            // list.push({ "company": "CI&T", "url": "https://github.com/ciandt" })
            // list.push({ "company": "PicPay", "url": "https://github.com/PicPay" })
            // list.push({ "company": "ThoughtWorks", "url": "https://github.com/thoughtworks" })
            // list.push({ "company": "QuintoAndar", "url": "https://github.com/quintoandar" })
            // list.push({ "company": "iFood", "url": "https://github.com/ifood" })
            // list.push({ "company": "OLX Brasil", "url": "https://github.com/olxbr" })
            // list.push({ "company": "LuizaLabs", "url": "https://github.com/luizalabs" })
            // list.push({ "company": "Neon", "url": "https://github.com/neon" })
            // list.push({ "company": "Via", "url": "https://github.com/viavarejo" })
            // list.push({ "company": "Stone", "url": "https://github.com/stone-payments" })
            // list.push({ "company": "Gympass", "url": "https://github.com/Gympass" })
            // list.push({ "company": "EBANX", "url": "https://github.com/ebanx" })
            // list.push({ "company": "Loggi", "url": "https://github.com/loggi" })
            // list.push({ "company": "Globo", "url": "https://github.com/globocom" })
            // list.push({ "company": "Grupo Boticário", "url": "https://github.com/grupoboticario" })
            // list.push({ "company": "iti Itaú", "url": "https://github.com/itidigital" })
            // list.push({ "company": "Wildlife Studios", "url": "https://github.com/wildlife-studios" })
            // list.push({ "company": "VTEX", "url": "https://github.com/vtex" })
            // list.push({ "company": "Zé Delivery", "url": "https://github.com/ZXVentures" })
            // list.push({ "company": "Uber", "url": "https://github.com/uber" })
            // list.push({ "company": "SumUp", "url": "https://github.com/sumup" })
            // list.push({ "company": "unico IDtech", "url": "https://github.com/acesso-io" })
            // list.push({ "company": "Amazon", "url": "https://github.com/amzn" })
            // list.push({ "company": "AWS", "url": "https://github.com/aws" })
            // list.push({ "company": "Pipefy", "url": "https://github.com/pipefy" })
            // list.push({ "company": "Santander Brasil", "url": "https://github.com/gruposantander" })
            // list.push({ "company": "Dafiti", "url": "https://github.com/dafiti-group" })
            // list.push({ "company": "BTG Pactual", "url": "https://github.com/BTGPactual" })
            // list.push({ "company": "Zenvia", "url": "https://github.com/zenvia" })
            // list.push({ "company": "Dasa", "url": "https://github.com/dasa-health" })
            // list.push({ "company": "Ame Digital", "url": "https://github.com/AmeDigital" })
            // list.push({ "company": "Sanar", "url": "https://github.com/sanar" })
            // list.push({ "company": "Facebook (Meta)", "url": "https://github.com/facebook" })
            // list.push({ "company": "99", "url": "https://github.com/99Taxis" })
            // list.push({ "company": "RD Station", "url": "https://github.com/ResultadosDigitais" })
            // list.push({ "company": "Passei Direto", "url": "https://github.com/PasseiDireto" })
            // list.push({ "company": "Ambev Tech", "url": "https://github.com/ambevtech" })
            // list.push({ "company": "Liv Up", "url": "https://github.com/livup" })
            // list.push({ "company": "180 Seguros", "url": "https://github.com/180seg" })
            // list.push({ "company": "99", "url": "https://github.com/99Taxis" })
            // list.push({ "company": "Addi", "url": "https://github.com/AdelanteFinancialHoldings" })
            // list.push({ "company": "Alice", "url": "https://github.com/alice-health" })
            // list.push({ "company": "alt.bank", "url": "https://www.altbank.com.br/" })
            // list.push({ "company": "Alura Group (Alura + Caelum)", "url": "https://github.com/alura-cursos" })
            // list.push({ "company": "Amazon", "url": "https://github.com/amzn" })
            // list.push({ "company": "Ame Digital", "url": "https://github.com/AmeDigital" })
            // list.push({ "company": "Apple", "url": "https://github.com/apple" })
            // list.push({ "company": "Atlassian", "url": "https://github.com/atlassian" })
            // list.push({ "company": "Auth0", "url": "https://github.com/auth0" })
            // list.push({ "company": "Avanade", "url": "https://github.com/Avanade" })
            // list.push({ "company": "Avenue Code", "url": "https://github.com/avenuecode" })
            // list.push({ "company": "AWS", "url": "https://github.com/aws" })
            // list.push({ "company": "B2W Digital", "url": "https://github.com/b2wdigital" })
            // list.push({ "company": "B2W Market Place", "url": "https://github.com/b2w-marketplace" })
            // list.push({ "company": "Backbase", "url": "https://github.com/Backbase" })
            // list.push({ "company": "BairesDev", "url": "https://github.com/BairesDev" })
            // list.push({ "company": "BanQi", "url": "https://github.com/viavarejo-banqi" })
            // list.push({ "company": "Beep Saúde", "url": "https://github.com/beep-saude" })
            // list.push({ "company": "Belvo", "url": "https://github.com/belvo-finance" })
            // list.push({ "company": "Bitso", "url": "https://github.com/bitsoex" })
            // list.push({ "company": "Booking.com", "url": "https://github.com/bookingcom" })
            // list.push({ "company": "BossaBox", "url": "https://github.com/BossaBox" })
            // list.push({ "company": "Grupo Boticário", "url": "https://github.com/grupoboticario" })
            // list.push({ "company": "BTG Pactual: BTG Pactual", "url": "https://github.com/BTGPactual" })
            // list.push({ "company": "Buser Brasil", "url": "https://github.com/buserbrasil" })
            // list.push({ "company": "Bytedance", "url": "https://github.com/bytedance" })
            // list.push({ "company": "CI&T (ciet)", "url": "https://github.com/ciandt" })
            // list.push({ "company": "ClickBus", "url": "https://github.com/RocketBus" })
            // list.push({ "company": "Conta Azul", "url": "https://github.com/ContaAzul" })
            // list.push({ "company": "Cora", "url": "https://github.com/corabank" })
            // list.push({ "company": "Cornershop by Uber", "url": "https://github.com/cornershop" })
            // list.push({ "company": "Creditas", "url": "https://github.com/Creditas" })
            // list.push({ "company": "Cubos Tecnologia", "url": "https://github.com/cubos" })
            // list.push({ "company": "Dafiti (+Dafiti Group Latam)", "url": "https://github.com/dafiti-group" })
            // list.push({ "company": "Dell", "url": "https://github.com/dell" })
            // list.push({ "company": "dLocal", "url": "https://github.com/dlocal" })
            // list.push({ "company": "DocuSign", "url": "https://github.com/docusign" })
            // list.push({ "company": "DoorDash", "url": "https://github.com/doordash" })
            // list.push({ "company": "EBANX", "url": "https://github.com/ebanx" })
            // list.push({ "company": "Elo7", "url": "https://github.com/elo7" })
            // list.push({ "company": "Escale", "url": "https://github.com/escaletech" })
            // list.push({ "company": "Expedia Group (Open Source)", "url": "https://github.com/ExpediaGroup" })
            // list.push({ "company": "Expedia Inc", "url": "https://github.com/ExpediaInc" })
            // list.push({ "company": "Expedia Dot Com", "url": "https://github.com/ExpediaDotCom" })
            // list.push({ "company": "Facebook", "url": "https://github.com/facebook" })
            // list.push({ "company": "Farfetch", "url": "https://github.com/Farfetch" })
            // list.push({ "company": "FinanZero", "url": "https://github.com/finanzero/" })
            // list.push({ "company": "Frubana", "url": "https://github.com/Frubana" })
            // list.push({ "company": "GetNinjas", "url": "https://github.com/getninjas" })
            // list.push({ "company": "GFT Group", "url": "https://github.com/gft-br" })
            // list.push({ "company": "Globant", "url": "https://github.com/globant" })
            // list.push({ "company": "Globo", "url": "https://github.com/globocom" })
            // list.push({ "company": "Google", "url": "https://github.com/google" })
            // list.push({ "company": "GuiaBolso", "url": "https://github.com/GuiaBolso" })
            // list.push({ "company": "Guru Investimentos", "url": "https://github.com/guru-invest" })
            // list.push({ "company": "Gympass", "url": "https://github.com/Gympass" })
            // list.push({ "company": "Hash", "url": "https://github.com/hashlab" })
            // list.push({ "company": "HelloFresh", "url": "https://github.com/hellofresh" })
            // list.push({ "company": "Hotmart", "url": "https://github.com/Hotmart-Org" })
            // list.push({ "company": "Huge", "url": "https://github.com/hugeinc" })
            // list.push({ "company": "Hurb", "url": "https://github.com/hurbcom" })
            // list.push({ "company": "idwall", "url": "https://github.com/idwall" })
            // list.push({ "company": "iFood: iFood", "url": "https://github.com/ifood" })
            // list.push({ "company": "ília", "url": "https://github.com/aisdigital" })
            // list.push({ "company": "Intuit", "url": "https://github.com/intuit" })
            // list.push({ "company": "Invillia", "url": "https://github.com/Invillia" })
            // list.push({ "company": "isaac", "url": "https://github.com/nvidia-isaac" })
            // list.push({ "company": "Itaú: Itaú + Itaú Unibanco", "url": "https://github.com/itau" })
            // list.push({ "company": "Itaú: iti Itaú", "url": "https://github.com/itidigital" })
            // list.push({ "company": "James Delivery", "url": "https://github.com/james-delivery" })
            // list.push({ "company": "John Deere", "url": "https://github.com/JohnDeere" })
            // list.push({ "company": "Jusbrasil", "url": "https://github.com/jusbrasil" })
            // list.push({ "company": "Kavak", "url": "https://github.com/gokavak" })
            // list.push({ "company": "Kovi", "url": "https://github.com/kovihq" })
            // list.push({ "company": "Linx", "url": "https://github.com/chaordic" })
            // list.push({ "company": "Liv Up", "url": "https://github.com/livup" })
            // list.push({ "company": "Locaweb", "url": "https://github.com/locaweb" })
            // list.push({ "company": "Loft", "url": "https://github.com/loft-br" })
            // list.push({ "company": "Loggi", "url": "https://github.com/loggi" })
            // list.push({ "company": "Luizalabs", "url": "https://github.com/luizalabs" })
            // list.push({ "company": "M4U", "url": "https://github.com/Mobile4You" })
            // list.push({ "company": "MadeiraMadeira", "url": "https://github.com/madeiramadeirabr" })
            // list.push({ "company": "Medallia", "url": "https://github.com/medallia" })
            // list.push({ "company": "Méliuz", "url": "https://github.com/meliuz" })
            // list.push({ "company": "Memed", "url": "https://github.com/MemedDev" })
            // list.push({ "company": "Mercado Libre: Mercado Libre", "url": "https://github.com/mercadolibre" })
            // list.push({ "company": "Movile", "url": "https://github.com/Movile" })
            // list.push({ "company": "N26 + N26 BR", "url": "https://github.com/n26" })
            // list.push({ "company": "Neon", "url": "https://github.com/neon" })
            // list.push({ "company": "Netflix", "url": "https://github.com/Netflix" })
            // list.push({ "company": "Nexoos", "url": "https://github.com/NexoosBR" })
            // list.push({ "company": "NoVerde", "url": "https://github.com/noverde" })
            // list.push({ "company": "Olist", "url": "https://github.com/olist" })
            // list.push({ "company": "OLX: OLX Brasil", "url": "https://github.com/olxbr" })
            // list.push({ "company": "Open Co", "url": "https://github.com/openco" })
            // list.push({ "company": "Pagar.me", "url": "https://github.com/pagarme" })
            // list.push({ "company": "PagSeguro", "url": "https://github.com/pagseguro" })
            // list.push({ "company": "Pagbank", "url": "https://github.com/pagbank" })
            // list.push({ "company": "PayPal", "url": "https://github.com/paypal" })
            // list.push({ "company": "PayU", "url": "https://github.com/PayU" })
            // list.push({ "company": "PedidosYa", "url": "https://github.com/pedidosya" })
            // list.push({ "company": "PicPay", "url": "https://github.com/PicPay" })
            // list.push({ "company": "Pipefy", "url": "https://github.com/pipefy" })
            // list.push({ "company": "Pipo Saúde", "url": "https://github.com/piposaude" })
            // list.push({ "company": "Pismo", "url": "https://github.com/pismo" })
            // list.push({ "company": "Platzi", "url": "https://github.com/platzi" })
            // list.push({ "company": "QuintoAndar", "url": "https://github.com/quintoandar" })
            // list.push({ "company": "Rappi", "url": "https://github.com/rappiinc" })
            // list.push({ "company": "RD Station", "url": "https://github.com/ResultadosDigitais" })
            // list.push({ "company": "RecargaPay", "url": "https://github.com/recarga" })
            // list.push({ "company": "Red Hat", "url": "https://github.com/RedHatOfficial" })
            // list.push({ "company": "Revolut", "url": "https://github.com/revolut-engineering" })
            // list.push({ "company": "Runa", "url": "https://github.com/RunaCapital" })
            // list.push({ "company": "Safra", "url": "https://github.com/banco-safra" })
            // list.push({ "company": "Saltpay", "url": "https://github.com/saltpay" })
            // list.push({ "company": "Sami", "url": "https://github.com/oisamitech" })
            // list.push({ "company": "Sanar", "url": "https://github.com/sanar" })
            // list.push({ "company": "Santander Brasil: Santander Brasil+Banco Santander (both with location Brazil)", "url": "https://github.com/gruposantander" })
            // list.push({ "company": "Serasa Experian", "url": "https://github.com/serasaexperian-eid" })
            // list.push({ "company": "Shopee", "url": "https://github.com/Shopee" })
            // list.push({ "company": "Softplan", "url": "https://github.com/softplan" })
            // list.push({ "company": "SoundCloud", "url": "https://github.com/soundcloud" })
            // list.push({ "company": "Spotify", "url": "https://github.com/spotify" })
            // list.push({ "company": "Stone", "url": "https://github.com/stone-payments" })
            // list.push({ "company": "Stripe", "url": "https://github.com/stripe" })
            // list.push({ "company": "SumUp", "url": "https://github.com/sumup" })
            // list.push({ "company": "Sympla", "url": "https://github.com/sympla" })
            // list.push({ "company": "Take Blip", "url": "https://github.com/takenet" })
            // list.push({ "company": "ThoughtWorks", "url": "https://github.com/thoughtworks" })
            // list.push({ "company": "Toptal", "url": "https://github.com/toptal" })
            // list.push({ "company": "TOTVS", "url": "https://github.com/totvs" })
            // list.push({ "company": "Trustly", "url": "https://github.com/trustly" })
            // list.push({ "company": "Trybe", "url": "https://github.com/betrybe" })
            // list.push({ "company": "Twitter", "url": "https://github.com/twitter" })
            // list.push({ "company": "Uber (Uber+Uber Freight)", "url": "https://github.com/uber" })
            // list.push({ "company": "Via", "url": "https://github.com/viavarejo" })
            // list.push({ "company": "VTEX", "url": "https://github.com/vtex" })
            // list.push({ "company": "Walmart: Walmart only", "url": "https://github.com/walmartlabs" })
            // list.push({ "company": "Warren", "url": "https://github.com/warrenbrasil" })
            // list.push({ "company": "Wayfair", "url": "https://github.com/wayfair" })
            // list.push({ "company": "WeWork", "url": "https://github.com/wework" })
            // list.push({ "company": "Wildlife Studios", "url": "https://github.com/wildlife-studios" })
            // list.push({ "company": "Wise (ex-TransferWise)", "url": "https://github.com/transferwise" })
            // list.push({ "company": "Xerpay", "url": "https://github.com/Xerpa" })
            // list.push({ "company": "XP: XP Investimentos + XP Inc. (combined)", "url": "https://github.com/grupo-xp" })
            // list.push({ "company": "Youse", "url": "https://github.com/youse-seguradora" })
            // list.push({ "company": "Zé Delivery", "url": "https://github.com/ZXVentures" })
            // list.push({ "company": "Zendesk", "url": "https://github.com/zendesk" })
            // list.push({ "company": "Zenklub", "url": "https://github.com/Zenklub" })
            // list.push({ "company": "Zenvia", "url": "https://github.com/zenvia" })
            // list.push({ "company": "Zettle by PayPal (ex-iZettle)", "url": "https://github.com/iZettle" })
            // list.push({ "company": "Zoop", "url": "https://github.com/getzoop" })
            // list.push({ "company": "Zup Innovation", "url": "https://github.com/ZupIT" })
            // list.push({ "company": "Mercado Bitcoin", "url": "https://github.com/mercadobitcoin" })
            // list.push({ "company": "cloudwalk", "url": "https://github.com/cloudwalk" })
            // list.push({ "company": "Cora", "url": "https://github.com/corabank" })
            // list.push({ "company": "tembici", "url": "https://github.com/tembici" })
            // list.push({ "company": "Intelipost", "url": "https://github.com/intelipost" })
            // list.push({ "company": "Ingresse", "url": "https://github.com/ingresse" })
            // list.push({ "company": "BeeTech", "url": "https://github.com/BeeTech-global" })
            // list.push({ "company": "Pipo Saúde", "url": "https://github.com/piposaude" })
            // list.push({ "company": "Trybe", "url": "https://github.com/betrybe" })
            // list.push({ "company": "Swap", "url": "https://github.com/swap-dev" })
            // list.push({ "company": "EmCasa", "url": "https://github.com/emcasa" })
            // list.push({ "company": "inloco", "url": "https://github.com/inloco" })
            // list.push({ "company": "Olist", "url": "https://github.com/olist" })
            // list.push({ "company": "Warren", "url": "https://github.com/warrenbrasil" })
            // list.push({ "company": "Pipefy", "url": "https://github.com/pipefy" })
            // list.push({ "company": "Escale", "url": "https://github.com/escaletech" })
            // list.push({ "company": "Zoop", "url": "https://github.com/getzoop" })
            // list.push({ "company": "Buser", "url": "https://github.com/buserbrasil" })
            // list.push({ "company": "Kovi", "url": "https://github.com/kovihq" })
            // list.push({ "company": "Rocketchat", "url": "https://github.com/RocketChat" })
            // list.push({ "company": "Pismo", "url": "https://github.com/pismo" })
            // list.push({ "company": "Alice", "url": "https://github.com/alice-health" })
            // list.push({ "company": "SolFacil", "url": "https://github.com/solfacil" })
            // list.push({ "company": "Memed", "url": "https://github.com/MemedDev" })
            list.push({ "company": "Omie", "url": "https://github.com/omiexperience" })
            list.push({ "company": "Cobli", "url": "https://github.com/Cobliteam" })
            list.push({ "company": "Pier Seguradora", "url": "https://github.com/pier-digital" })
            list.push({ "company": "Justos", "url": "https://github.com/justosbr" })


        for (var i = 0; i < list.length; i++) {
            let page;
            if(list[i].url){
                page = await github.execute(list[i].url)
            }
            data.push(page)
        }
        console.log(data)

        return data;
    }
}

export { extractGithub } 
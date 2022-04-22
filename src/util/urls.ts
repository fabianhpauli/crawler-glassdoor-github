var URLs = [
    { company: "Mercado Bitcoin", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Mercado-Bitcoin-EI_IE2748106.13,28.htm", github: "https://github.com/mercadobitcoin" },
    { company: "CloudWalk, Inc.", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-CloudWalk-Inc-EI_IE2722308.13,26.htm", github: "https://github.com/cloudwalk" },
    { company: "Cora", glassdoor: "", github: "https://github.com/corabank" },
    { company: "Tembici", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Tembici-EI_IE2486348.13,20.htm", github: "https://github.com/tembici" },
    { company: "Intelipost", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Intelipost-EI_IE2484852.13,23.htm", github: "https://github.com/intelipost" },
    { company: "Ingresse", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Ingresse-EI_IE2384355.13,21.htm", github: "https://github.com/ingresse" },
    { company: "BeeTech", glassdoor: "", github: "https://github.com/BeeTech-global" },
    { company: "Pipo Saúde", glassdoor: "", github: "https://github.com/piposaude" },
    { company: "Trybe", glassdoor: "", github: "https://github.com/betrybe" },
    { company: "Swap", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Swap-Brazil-EI_IE4742954.13,24.htm", github: "https://github.com/swap-dev" },
    { company: "EmCasa", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-EmCasa-Brazil-EI_IE2828637.13,26.htm", github: "https://github.com/emcasa" },
    { company: "inloco", glassdoor: "", github: "https://github.com/inloco" },
    { company: "Olist", glassdoor: "", github: "https://github.com/olist" },
    { company: "Warren", glassdoor: "", github: "https://github.com/warrenbrasil" },
    { company: "Pipefy", glassdoor: "", github: "https://github.com/pipefy" },
    { company: "Escale", glassdoor: "", github: "https://github.com/escaletech" },
    { company: "Zoop", glassdoor: "", github: "https://github.com/getzoop" },
    { company: "Buser", glassdoor: "", github: "https://github.com/buserbrasil" },
    { company: "Kovi", glassdoor: "", github: "https://github.com/kovihq" },
    { company: "Rocketchat", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Rocket-Chat-EI_IE2244250.13,24.htm", github: "https://github.com/RocketChat" },
    { company: "Pismo", glassdoor: "", github: "https://github.com/pismo" },
    { company: "Alice", glassdoor: "", github: "https://github.com/alice-health" },
    { company: "SolFacil", glassdoor: "", github: "https://github.com/solfacil" },
    { company: "Memed", glassdoor: "", github: "https://github.com/MemedDev" },
    { company: "Omie", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Omie-EI_IE2483805.13,17.htm", github: "https://github.com/omiexperience" },
    { company: "will bank", glassdoor: "", github: "" },
    { company: "Cobli", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Cobli-EI_IE2304948.13,18.htm", github: "https://github.com/Cobliteam" },
    { company: "Pier Seguradora", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Pier-EI_IE2848417.13,17.htm", github: "https://github.com/pier-digital" },
    { company: "Justos", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Justos-EI_IE5222765.13,19.htm", github: "https://github.com/justosbr" },
    { company: "180° Seguros", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-180-Seguros-EI_IE6397601.13,24.htm", github: "https://github.com/180seg", crunchbase: "" },
    { company: "99", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-99-EI_IE1384588.13,15.htm", github: "https://github.com/99Taxis", crunchbase: "" },
    { company: "ADDI", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-ADDI-EI_IE3843870.13,17.htm", github: "https://github.com/AdelanteFinancialHoldings", crunchbase: "" },
    { company: "Adyen", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Adyen-EI_IE684495.13,18.htm", github: "", crunchbase: "" },
    { company: "Agi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Agi-EI_IE1997188.13,16.htm", github: "", crunchbase: "" },
    { company: "Alelo Brasil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Alelo-EI_IE502801.13,18.htm", github: "", crunchbase: "" },
    { company: "Alice", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Alice-EI_IE4315940.13,18.htm", github: "https://github.com/alice-health", crunchbase: "https://www.crunchbase.com/organization/alice-8d5d" },
    { company: "alt.bank", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Alt-Bank-EI_IE2961448.13,21.htm", github: "https://www.altbank.com.br/", crunchbase: "https://www.crunchbase.com/organization/alt-bank" },
    { company: "Alura", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Alura-EI_IE2500530.13,18.htm", github: "https://github.com/alura-cursos", crunchbase: "" },
    { company: "Amazon", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Amazon-EI_IE6036.13,19.htm", github: "https://github.com/amzn", crunchbase: "" },
    { company: "Ame Digital", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Ame-Digital-EI_IE2860094.13,24.htm", github: "https://github.com/AmeDigital", crunchbase: "" },
    { company: "Apple", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Apple-EI_IE1138.13,18.htm", github: "https://github.com/apple", crunchbase: "" },
    { company: "Atlassian", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Atlassian-EI_IE115699.13,22.htm", github: "https://github.com/atlassian", crunchbase: "https://www.crunchbase.com/organization/atlassian" },
    { company: "Auth0", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Auth0-EI_IE1162798.13,18.htm", github: "https://github.com/auth0", crunchbase: "https://www.crunchbase.com/organization/auth0" },
    { company: "Avanade", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Avanade-EI_IE11701.13,20.htm", github: "https://github.com/Avanade", crunchbase: "" },
    { company: "Avenue Code", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Avenue-Code-EI_IE456173.13,24.htm", github: "https://github.com/avenuecode", crunchbase: "" },
    { company: "AWS", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Amazon-EI_IE6036.13,19.htm", github: "https://github.com/aws", crunchbase: "" },
    { company: "B2W Digital", glassdoor: "https://www.glassdoor.com.br/Overview/Working-at-americanas-s-a-EI_IE10939.11,25.htm?countryRedirect=true", github: "https://github.com/b2wdigital", crunchbase: "" },
    { company: "B2W Market Place", glassdoor: "https://www.glassdoor.com.br/Overview/Working-at-americanas-s-a-EI_IE10939.11,25.htm?countryRedirect=true", github: "https://github.com/b2w-marketplace", crunchbase: "" },
    { company: "Backbase", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Backbase-EI_IE117266.13,21.htm", github: "https://github.com/Backbase", crunchbase: "" },
    { company: "BairesDev", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-BairesDev-EI_IE864485.13,22.htm", github: "https://github.com/BairesDev", crunchbase: "" },
    { company: "Banco BV", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-banco-BV-EI_IE333951.13,21.htm", github: "", crunchbase: "" },
    { company: "Banco Inter", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Inter-EI_IE2483031.13,18.htm", github: "", crunchbase: "" },
    { company: "Banco Next", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Banco-Next-EI_IE4839127.13,23.htm", github: "", crunchbase: "" },
    { company: "Banco Original", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Banco-Original-EI_IE1026577.13,27.htm", github: "", crunchbase: "" },
    { company: "Banco Pan", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Banco-PAN-EI_IE1184444.13,22.htm", github: "", crunchbase: "" },
    { company: "BanQi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-banQi-EI_IE4266216.13,18.htm", github: "https://github.com/viavarejo-banqi", crunchbase: "" },
    { company: "Beep Saúde", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Beep-Sa%C3%BAde-EI_IE2836017.13,23.htm", github: "https://github.com/beep-saude", crunchbase: "" },
    { company: "Belvo", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Belvo-EI_IE3275125.13,18.htm", github: "https://github.com/belvo-finance", crunchbase: "" },
    { company: "Bitso", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Bitso-EI_IE1710750.13,18.htm", github: "https://github.com/bitsoex", crunchbase: "" },
    { company: "Booking.com", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Booking-com-EI_IE256653.13,24.htm", github: "https://github.com/bookingcom", crunchbase: "" },
    { company: "BossaBox", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-BossaBox-EI_IE2800036.13,21.htm", github: "https://github.com/BossaBox", crunchbase: "" },
    { company: "Grupo Boticário", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Grupo-Botic%C3%A1rio-EI_IE2195061.13,28.htm", github: "https://github.com/grupoboticario", crunchbase: "" },
    { company: "Banco Bradesco", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Banco-Bradesco-EI_IE10997.13,27.htm", github: "", crunchbase: "" },
    { company: "BTG Pactual", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-BTG-Pactual-EI_IE411540.13,24.htm", github: "https://github.com/BTGPactual", crunchbase: "" },
    { company: "Buser Brasil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Buser-EI_IE2844045.13,18.htm", github: "https://github.com/buserbrasil", crunchbase: "https://www.crunchbase.com/organization/buser" },
    { company: "Bytedance", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-ByteDance-EI_IE1624196.13,22.htm", github: "https://github.com/bytedance", crunchbase: "" },
    { company: "C6 Bank", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-C6-Bank-EI_IE2469864.13,20.htm", github: "", crunchbase: "" },
    { company: "CI&T", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-CI-and-T-EI_IE140265.13,21.htm", github: "https://github.com/ciandt", crunchbase: "https://www.crunchbase.com/organization/ci-t" },
    { company: "ClickBus", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-ClickBus-EI_IE955083.13,21.htm", github: "https://github.com/RocketBus", crunchbase: "" },
    { company: "Conta Azul", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-ContaAzul-EI_IE1066463.13,22.htm", github: "https://github.com/ContaAzul", crunchbase: "https://www.crunchbase.com/organization/contaazul" },
    { company: "Contabilizei", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-ContaAzul-EI_IE1066463.13,22.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/contabilizei-contabilidade-online" },
    { company: "Cora", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Cora-Bank-EI_IE3078822.13,22.htm", github: "https://github.com/corabank", crunchbase: "https://www.crunchbase.com/organization/cora-dda2" },
    { company: "Cornershop by Uber", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Cornershop-by-Uber-EI_IE2435147.13,31.htm", github: "https://github.com/cornershop", crunchbase: "https://www.crunchbase.com/organization/cornershop" },
    { company: "Creditas", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Creditas-EI_IE2122901.13,21.htm", github: "https://github.com/Creditas", crunchbase: "https://www.crunchbase.com/organization/creditas" },
    { company: "Cubos Tecnologia", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Cubos-EI_IE2110357.13,18.htm", github: "https://github.com/cubos", crunchbase: "https://www.crunchbase.com/organization/cubos" },
    { company: "Dafiti", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Dafiti-EI_IE701830.13,19.htm", github: "https://github.com/dafiti-group", crunchbase: "https://www.crunchbase.com/organization/dafiti" },
    { company: "Dell", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Dell-Technologies-EI_IE1327.13,30.htm", github: "https://github.com/dell", crunchbase: "https://www.crunchbase.com/organization/dell" },
    { company: "DocuSign", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-DocuSign-EI_IE307604.13,21.htm", github: "https://github.com/docusign", crunchbase: "https://www.crunchbase.com/organization/docusign" },
    { company: "EBANX", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-EBANX-EI_IE1105630.13,18.htm", github: "https://github.com/ebanx", crunchbase: "https://www.crunchbase.com/organization/ebanx" },
    { company: "Elo7", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Elo7-EI_IE864738.13,17.htm", github: "https://github.com/elo7", crunchbase: "https://www.crunchbase.com/organization/elo7" },
    { company: "Escale", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Escale-EI_IE2255850.13,19.htm", github: "https://github.com/escaletech", crunchbase: "https://www.crunchbase.com/organization/escale" },
    { company: "Expedia Group (Open Source)", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Expedia-Group-EI_IE9876.13,26.htm", github: "https://github.com/ExpediaGroup", crunchbase: "https://www.crunchbase.com/organization/expedia" },
    { company: "Expedia Inc", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Expedia-Group-EI_IE9876.13,26.htm", github: "https://github.com/ExpediaInc", crunchbase: "https://www.crunchbase.com/organization/expedia" },
    { company: "Expedia Dot Com", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Expedia-Group-EI_IE9876.13,26.htm", github: "https://github.com/ExpediaDotCom", crunchbase: "https://www.crunchbase.com/organization/expedia" },
    { company: "Facebook", glassdoor: "https://www.glassdoor.com.br/metacareers", github: "https://github.com/facebook", crunchbase: "https://www.crunchbase.com/organization/facebook" },
    { company: "Farfetch", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-FARFETCH-EI_IE799159.13,21.htm", github: "https://github.com/Farfetch", crunchbase: "https://www.crunchbase.com/organization/farfetch" },
    { company: "FinanZero", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-FinanZero-EI_IE2812408.13,22.htm", github: "https://github.com/finanzero/", crunchbase: "https://www.crunchbase.com/organization/finanzero" },
    { company: "Franq Openbank", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Franq-Openbank-EI_IE4022440.13,27.htm", github: "https://github.com/franq", crunchbase: "https://www.crunchbase.com/organization/franq-openbank" },
    { company: "Frubana", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Frubana-EI_IE2462202.13,20.htm", github: "https://github.com/Frubana", crunchbase: "https://www.crunchbase.com/organization/frubana" },
    { company: "GetNinjas", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-GetNinjas-EI_IE1493964.13,22.htm", github: "https://github.com/getninjas", crunchbase: "https://www.crunchbase.com/organization/getninjas" },
    { company: "GFT Group", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-GFT-Group-EI_IE5353645.13,22.htm", github: "https://github.com/gft-br", crunchbase: "https://www.crunchbase.com/organization/gft-com" },
    { company: "Globant", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Globant-EI_IE150678.13,20.htm", github: "https://github.com/globant", crunchbase: "https://www.crunchbase.com/organization/globant" },
    { company: "Globo", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Globo-EI_IE321393.13,18.htm", github: "https://github.com/globocom", crunchbase: "https://www.crunchbase.com/organization/grupo-globo" },
    { company: "Google", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Google-EI_IE9079.13,19.htm", github: "https://github.com/google", crunchbase: "https://www.crunchbase.com/organization/google" },
    { company: "GuiaBolso", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Guiabolso-EI_IE1268911.13,22.htm", github: "https://github.com/GuiaBolso", crunchbase: "https://www.crunchbase.com/organization/guiabolso" },
    { company: "Guru Investimentos", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Guru-EI_IE4570065.13,17.htm", github: "https://github.com/guru-invest", crunchbase: "https://www.crunchbase.com/organization/guru-c6bd" },
    { company: "Gympass", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Gympass-EI_IE1419026.13,20.htm", github: "https://github.com/Gympass", crunchbase: "https://www.crunchbase.com/organization/gympass" },
    { company: "Hash", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Hash-EI_IE3133159.13,17.htm", github: "https://github.com/hashlab", crunchbase: "https://www.crunchbase.com/organization/hash-lab" },
    { company: "HelloFresh", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-HelloFresh-EI_IE998728.13,23.htm", github: "https://github.com/hellofresh", crunchbase: "https://www.crunchbase.com/organization/hellofresh" },
    { company: "Hotmart", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Hotmart-EI_IE1139514.13,20.htm", github: "https://github.com/Hotmart-Org", crunchbase: "https://www.crunchbase.com/organization/hotmart" },
    { company: "Huge", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Huge-EI_IE139928.13,17.htm", github: "https://github.com/hugeinc", crunchbase: "https://www.crunchbase.com/organization/huge" },
    { company: "Hurb", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Hurb-EI_IE936163.13,17.htm", github: "https://github.com/hurbcom", crunchbase: "https://www.crunchbase.com/organization/hotel-urbano" },
    { company: "idwall", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-idwall-EI_IE1948154.13,19.htm", github: "https://github.com/idwall", crunchbase: "https://www.crunchbase.com/organization/idwall" },
    { company: "iFood", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-iFood-EI_IE1396166.13,18.htm", github: "https://github.com/ifood", crunchbase: "https://www.crunchbase.com/organization/ifood" },
    { company: "ília", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-%C3%ADlia-Brazil-EI_IE4266621.13,24.htm", github: "https://github.com/aisdigital", crunchbase: "https://www.crunchbase.com/organization/%C3%ADlia" },
    { company: "Intuit", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Intuit-EI_IE2293.13,19.htm", github: "https://github.com/intuit", crunchbase: "https://www.crunchbase.com/organization/intuit" },
    { company: "Invillia", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Invillia-EI_IE2411180.13,21.htm", github: "https://github.com/Invillia", crunchbase: "https://www.crunchbase.com/organization/invillia" },
    { company: "isaac", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-isaac-Brazil-EI_IE4496925.13,25.htm", github: "https://github.com/nvidia-isaac", crunchbase: "https://www.crunchbase.com/organization/isaac-725b" },
    { company: "Itaú: Itaú + Itaú Unibanco", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Ita%C3%BA-Unibanco-Ita%C3%BA-BBA-e-Rede-EI_IE10999.13,42.htm", github: "https://github.com/itau", crunchbase: "https://www.crunchbase.com/organization/banco-itau" },
    { company: "Itaú: iti Itaú", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-iti-Ita%C3%BA-EI_IE3347026.13,21.htm", github: "https://github.com/itidigital", crunchbase: "https://www.crunchbase.com/organization/iti-42c6" },
    { company: "James Delivery", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-James-Delivery-EI_IE2570636.13,27.htm", github: "https://github.com/james-delivery", crunchbase: "https://www.crunchbase.com/organization/james-delivery" },
    { company: "John Deere", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-John-Deere-EI_IE195.13,23.htm", github: "https://github.com/JohnDeere", crunchbase: "https://www.crunchbase.com/organization/john-deere" },
    { company: "Jusbrasil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Jusbrasil-EI_IE755082.13,22.htm", github: "https://github.com/jusbrasil", crunchbase: "https://www.crunchbase.com/organization/jusbrasil" },
    { company: "Kavak", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Kavak-EI_IE2833457.13,18.htm", github: "https://github.com/gokavak", crunchbase: "https://www.crunchbase.com/organization/kavak" },
    { company: "Kovi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Kovi-Tecnologia-EI_IE2928151.13,28.htm", github: "https://github.com/kovihq", crunchbase: "https://www.crunchbase.com/organization/kovi" },
    { company: "Linx", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Linx-EI_IE676478.13,17.htm", github: "https://github.com/chaordic", crunchbase: "https://www.crunchbase.com/organization/linx-sa" },
    { company: "Liv Up", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Liv-Up-EI_IE2319967.13,19.htm", github: "https://github.com/livup", crunchbase: "https://www.crunchbase.com/organization/liv-up" },
    { company: "Locaweb", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Locaweb-EI_IE336159.13,20.htm", github: "https://github.com/locaweb", crunchbase: "https://www.crunchbase.com/organization/locaweb" },
    { company: "Loft", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Loft-EI_IE2845308.13,17.htm", github: "https://github.com/loft-br", crunchbase: "https://www.crunchbase.com/organization/loft-br" },
    { company: "Loggi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Loggi-EI_IE1912134.13,18.htm", github: "https://github.com/loggi", crunchbase: "https://www.crunchbase.com/organization/loggi" },
    { company: "Luizalabs", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Luizalabs-EI_IE2484356.13,22.htm", github: "https://github.com/luizalabs", crunchbase: "https://www.crunchbase.com/organization/luiza-labs" },
    { company: "M4U", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-M4U-EI_IE721446.13,16.htm", github: "https://github.com/Mobile4You", crunchbase: "https://www.crunchbase.com/organization/m4u" },
    { company: "MadeiraMadeira", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-M4U-EI_IE721446.13,16.htm", github: "https://github.com/madeiramadeirabr", crunchbase: "https://www.crunchbase.com/organization/madeiramadeira" },
    { company: "MaxMilhas", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-MaxMilhas-EI_IE1973935.13,22.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/maxmilhas" },
    { company: "Medallia", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Medallia-EI_IE268806.13,21.htm", github: "https://github.com/medallia", crunchbase: "https://www.crunchbase.com/organization/medallia" },
    { company: "Méliuz", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-M%C3%A9liuz-EI_IE1384857.13,19.htm", github: "https://github.com/meliuz", crunchbase: "https://www.crunchbase.com/organization/meliuz" },
    { company: "Memed", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Memed-EI_IE2491775.13,18.htm", github: "https://github.com/MemedDev", crunchbase: "https://www.crunchbase.com/organization/memed-2" },
    { company: "Mercado Libre", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Mercado-Livre-EI_IE2372230.13,26.htm", github: "https://github.com/mercadolibre", crunchbase: "https://www.crunchbase.com/organization/mercadolibre" },
    { company: "Mercado Livre", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Mercado-Livre-EI_IE2372230.13,26.htm", github: "https://github.com/mercadolibre", crunchbase: "https://www.crunchbase.com/organization/mercandolivre-com" },
    { company: "meutudo.", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Meu-Tudo-EI_IE2842333.13,21.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/meu-tudo" },
    { company: "Movile", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Movile-EI_IE301687.13,19.htm", github: "https://github.com/Movile", crunchbase: "https://www.crunchbase.com/organization/movile-latin-america" },
    { company: "N26", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-N26-EI_IE1032903.13,16.htm", github: "https://github.com/n26", crunchbase: "https://www.crunchbase.com/organization/n26" },
    { company: "N26 Brazil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-N26-EI_IE1032903.13,16.htm", github: "https://github.com/n26", crunchbase: "https://www.crunchbase.com/organization/n26-brazil" },
    { company: "Neon", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Neon-Pagamentos-EI_IE2342778.13,28.htm", github: "https://github.com/neon", crunchbase: "https://www.crunchbase.com/organization/banco-neon" },
    { company: "Netflix", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Netflix-EI_IE11891.13,20.htm", github: "https://github.com/Netflix", crunchbase: "https://www.crunchbase.com/organization/netflix" },
    { company: "Nexoos", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Nexoos-EI_IE1646586.13,19.htm", github: "https://github.com/NexoosBR", crunchbase: "https://www.crunchbase.com/organization/nexoos" },
    { company: "NoVerde", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Noverde-EI_IE2128189.13,20.htm", github: "https://github.com/noverde", crunchbase: "https://www.crunchbase.com/organization/noverde" },
    { company: "Olist", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Olist-EI_IE2315236.13,18.htm", github: "https://github.com/olist", crunchbase: "https://www.crunchbase.com/organization/olist" },
    { company: "OLX Brasil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-OLX-Brasil-EI_IE2500798.13,23.htm", github: "https://github.com/olxbr", crunchbase: "https://www.crunchbase.com/organization/olx-brazil" },
    { company: "Open Co", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Open-Co-EI_IE4806570.13,20.htm", github: "https://github.com/openco", crunchbase: "https://www.crunchbase.com/organization/open-co-1926" },
    { company: "Pagar.me", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Pagar-me-EI_IE1341379.13,21.htm", github: "https://github.com/pagarme", crunchbase: "https://www.crunchbase.com/organization/pagar-me" },
    { company: "PagSeguro", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PagBank-PagSeguro-EI_IE1335500.13,30.htm", github: "https://github.com/pagseguro", crunchbase: "https://www.crunchbase.com/organization/pagseguro" },
    { company: "Pagbank", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PagBank-PagSeguro-EI_IE1335500.13,30.htm", github: "https://github.com/pagbank", crunchbase: "https://www.crunchbase.com/organization/pagseguro" },
    { company: "PayPal", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PayPal-EI_IE9848.13,19.htm", github: "https://github.com/paypal", crunchbase: "https://www.crunchbase.com/organization/paypal" },
    { company: "PayU", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PayU-EI_IE1018226.13,17.htm", github: "https://github.com/PayU", crunchbase: "https://www.crunchbase.com/organization/payu-t-rkiye" },
    { company: "PedidosYa", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PedidosYa-EI_IE1275051.13,22.htm", github: "https://github.com/pedidosya", crunchbase: "https://www.crunchbase.com/organization/pedidosya" },
    { company: "PicPay", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-PicPay-EI_IE2020252.13,19.htm", github: "https://github.com/PicPay", crunchbase: "https://www.crunchbase.com/organization/picpay" },
    { company: "Pipefy", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Pipefy-EI_IE1469776.13,19.htm", github: "https://github.com/pipefy", crunchbase: "https://www.crunchbase.com/organization/pipefy" },
    { company: "Pipo Saúde", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Pipo-Sa%C3%BAde-EI_IE3504342.13,23.htm", github: "https://github.com/piposaude", crunchbase: "https://www.crunchbase.com/organization/pipo-sa%C3%BAde" },
    { company: "Pismo", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Pismo-EI_IE2744250.13,18.htm", github: "https://github.com/pismo", crunchbase: "https://www.crunchbase.com/organization/pismo" },
    { company: "Platzi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Platzi-EI_IE1485738.13,19.htm", github: "https://github.com/platzi", crunchbase: "https://www.crunchbase.com/organization/platzi" },
    { company: "QuintoAndar", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-QuintoAndar-EI_IE1161693.13,24.htm", github: "https://github.com/quintoandar", crunchbase: "https://www.crunchbase.com/organization/quintoandar" },
    { company: "Rappi", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Rappi-EI_IE1275894.13,18.htm", github: "https://github.com/rappiinc", crunchbase: "https://www.crunchbase.com/organization/rappi" },
    { company: "RD Station", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-RD-Station-EI_IE965847.13,23.htm", github: "https://github.com/ResultadosDigitais", crunchbase: "https://www.crunchbase.com/organization/resultados-digitais" },
    { company: "RecargaPay", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-RecargaPay-EI_IE1397947.13,23.htm", github: "https://github.com/recarga", crunchbase: "https://www.crunchbase.com/organization/recargapay" },
    { company: "Red Hat", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Red-Hat-EI_IE8868.13,20.htm", github: "https://github.com/RedHatOfficial", crunchbase: "https://www.crunchbase.com/organization/red-hat" },
    { company: "Remessa Online", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Remessa-Online-EI_IE2125029.13,27.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/remessa-online" },
    { company: "Revolut", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Revolut-EI_IE1176471.13,20.htm", github: "https://github.com/revolut-engineering", crunchbase: "https://www.crunchbase.com/organization/revolut" },
    { company: "Safra", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Banco-Safra-EI_IE15189.13,24.htm", github: "https://github.com/banco-safra", crunchbase: "https://www.crunchbase.com/organization/banco-safra" },
    { company: "Sami", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Sami-Sa%C3%BAde-EI_IE3577625.13,23.htm", github: "https://github.com/oisamitech", crunchbase: "https://www.crunchbase.com/organization/sami" },
    { company: "Sanar", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Sanar-EI_IE2313421.13,18.htm", github: "https://github.com/sanar", crunchbase: "https://www.crunchbase.com/organization/editora-sanar" },
    { company: "Santander Brasil", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Santander-EI_IE828048.13,22.htm", github: "https://github.com/gruposantander", crunchbase: "https://www.crunchbase.com/organization/santander" },
    { company: "Serasa Experian", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Serasa-EI_IE2469855.13,19.htm", github: "https://github.com/serasaexperian-eid", crunchbase: "https://www.crunchbase.com/organization/serasa-experian" },
    { company: "Shopee", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Shopee-EI_IE1263091.13,19.htm", github: "https://github.com/Shopee", crunchbase: "https://www.crunchbase.com/organization/shopee" },
    { company: "Softplan", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Softplan-EI_IE656864.13,21.htm", github: "https://github.com/softplan", crunchbase: "https://www.crunchbase.com/organization/softplan" },
    { company: "Stone", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Stone-EI_IE1093539.13,18.htm", github: "https://github.com/stone-payments", crunchbase: "https://www.crunchbase.com/organization/stone-pagamentos-sa" },
    { company: "Stripe", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Stripe-EI_IE671932.13,19.htm", github: "https://github.com/stripe", crunchbase: "https://www.crunchbase.com/organization/stripe" },
    { company: "SumUp", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-SumUp-EI_IE673829.13,18.htm", github: "https://github.com/sumup", crunchbase: "https://www.crunchbase.com/organization/sumup" },
    { company: "Sympla", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Sympla-EI_IE1622849.13,19.htm", github: "https://github.com/sympla", crunchbase: "https://www.crunchbase.com/organization/sympla" },
    { company: "Take Blip", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Take-Blip-EI_IE754538.13,22.htm", github: "https://github.com/takenet", crunchbase: "https://www.crunchbase.com/organization/take-blip" },
    { company: "ThoughtWorks", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Thoughtworks-EI_IE38334.13,25.htm", github: "https://github.com/thoughtworks", crunchbase: "https://www.crunchbase.com/organization/thoughtworks" },
    { company: "Toptal", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Toptal-EI_IE882070.13,19.htm", github: "https://github.com/toptal", crunchbase: "https://www.crunchbase.com/organization/toptal" },
    { company: "TOTVS", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-TOTVS-EI_IE140298.13,18.htm", github: "https://github.com/totvs", crunchbase: "https://www.crunchbase.com/organization/totvs" },
    { company: "Trustly", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Trustly-EI_IE962720.13,20.htm", github: "https://github.com/trustly", crunchbase: "https://www.crunchbase.com/organization/trustly-group" },
    { company: "Trybe", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Trybe-Brazil-EI_IE3790463.13,25.htm", github: "https://github.com/betrybe", crunchbase: "https://www.crunchbase.com/organization/trybe-7f8a" },
    { company: "Uber", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Uber-EI_IE575263.13,17.htm", github: "https://github.com/uber", crunchbase: "https://www.crunchbase.com/organization/uber" },
    { company: "Compass.uol", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Compass-Uol-EI_IE1331935.13,24.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/compasso-uol" },
    { company: "Via", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Via-EI_IE2002288.13,16.htm", github: "https://github.com/viavarejo", crunchbase: "https://www.crunchbase.com/organization/via-varejo"},
    { company: "VTEX", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-VTEX-EI_IE713645.13,17.htm", github: "https://github.com/vtex", crunchbase: "https://www.crunchbase.com/organization/vtex" },
    { company: "Warren", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Warren-EI_IE2233093.13,19.htm", github: "https://github.com/warrenbrasil", crunchbase: "https://www.crunchbase.com/organization/warren-2" },
    { company: "WeWork", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-WeWork-EI_IE661275.13,19.htm", github: "https://github.com/wework", crunchbase: "https://www.crunchbase.com/organization/wework" },
    { company: "Wildlife Studios", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Wildlife-Studios-EI_IE1192101.13,29.htm", github: "https://github.com/wildlife-studios", crunchbase: "https://www.crunchbase.com/organization/wildlife-studios" },
    { company: "will bank", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-will-bank-EI_IE4209911.13,22.htm", github: "", crunchbase: "https://www.crunchbase.com/organization/will-bank" },
    { company: "Xerpa", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Betterfly-EI_IE4344332.13,22.htm", github: "https://github.com/Xerpa", crunchbase: "https://www.crunchbase.com/organization/xerpa" },
    { company: "Youse", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Youse-Seguros-EI_IE1273564.13,26.htm", github: "https://github.com/youse-seguradora", crunchbase: "https://www.crunchbase.com/organization/youse-seguros" },
    { company: "Zé Delivery", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Z%C3%A9-Delivery-EI_IE3219952.13,24.htm", github: "https://github.com/ZXVentures", crunchbase: "https://www.crunchbase.com/organization/z%C3%A9-delivery" },
    { company: "Zendesk", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Zendesk-EI_IE360923.13,20.htm", github: "https://github.com/zendesk", crunchbase: "https://www.crunchbase.com/organization/zendesk" },
    { company: "Zenklub", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Zenklub-EI_IE3336218.13,20.htm", github: "https://github.com/Zenklub", crunchbase: "https://www.crunchbase.com/organization/zenklub" },
    { company: "Zenvia", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Zenvia-EI_IE1290025.13,19.htm", github: "https://github.com/zenvia", crunchbase: "https://www.crunchbase.com/organization/zenvia" },
    { company: "Zoop", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Zoop-EI_IE2850162.13,17.htm", github: "https://github.com/getzoop", crunchbase: "https://www.crunchbase.com/organization/zoop" },
    { company: "Zup Innovation", glassdoor: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Zup-Innovation-EI_IE2482761.13,27.htm", github: "https://github.com/ZupIT" , crunchbase: "https://www.crunchbase.com/organization/zup-it-innovation"},
    ]

export default URLs
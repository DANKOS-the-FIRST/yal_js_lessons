let request = require("request");
let cheerio = require('cheerio');
const championsList = require("./championsList");

class LolScrapper {
    #urlChamps = 'https://app.mobalytics.gg/lol/champions'
    #urlPatch = 'https://mobalytics.gg/blog/category/patch-notes/'
    patch = ''
    champsList = null


    constructor() {
        this.champsList = new championsList()
    }

    async loadInfo() {
        console.log('step 1')
        this.patch = await this.loadPatch(this.#urlPatch)

        console.log('step 2')
        let champsData = await this.loadChampionsData(this.#urlChamps)
        await this.champsList.loadData(champsData, this.patch)

        console.log('loadInfo() finish')
    }

    loadPatch(urlPatch) {
        return new Promise(function (resolve, reject) {
            request(urlPatch,
                function (error, _response, body) {
                    if (!error) {
                        let $pageBody = cheerio.load(body)
                        const currentPatchElement = $pageBody('div.category-description > h2')
                        const currentPatchStr = cheerio.text(currentPatchElement)
                        const currentPatchNumber = currentPatchStr.slice(-5)
                        console.log('loadPatch()')
                        console.log(`########################getPatch: ${currentPatchNumber}`)
                        resolve(currentPatchNumber)
                    } else {
                        console.log("Error was thrown: " + error);
                        reject()
                    }
                })
        })
    }

    loadChampionsData(urlChamps) {
        return new Promise(function (resolve, reject) {
            request(urlChamps,
                function (error, _response, body) {
                    if (!error) {
                        let $pageBody = cheerio.load(body)
                        const championsData = $pageBody('div.m-1u0kasc')
                        console.log('loadChampionsData()')
                        resolve(championsData)
                    } else {
                        console.log("Error was thrown: " + error);
                        reject()
                    }
                })
        })
    }

    showFields() {
        return new Promise(resolve => {
            console.dir('showFields()')
            console.dir(`this.patch = ${this.patch}`)
            console.dir(`this.champsElement.constructor.name = ${this.champsList.constructor.name}`)
            resolve()
        })
    }
}


module.exports = LolScrapper;
(async () => {
    let sc = new LolScrapper()
    await sc.loadInfo()
    await sc.showFields()
    await sc.champsList.saveToTxt()
    await sc.champsList.saveToHtml()
})()


// request(this.#url, function (error, _response, body) {
//     if (!error) {
//         let $pageBody = cheerio.load(body)
//         const currentPatchElement = $pageBody('div.category-description')
//         const currentPatchStr = cheerio.text(currentPatchElement)
//         console.log(currentPatchStr)
//         const tierTable = $pageBody('table.ninja_footable')
//
//         let heroesList = [];
//         tierTable.find('tbody > tr > td > a > strong').each(function (_index, element) {
//             let item = $pageBody(element).text()
//             if (item) {
//                 heroesList.push(item);
//             }
//         });
//
//         table = new Table(tierTable, currentPatchStr, heroesList);
//         console.log(`table1: ${table} `)
//         table.saveToTxt()
//         table.saveToHtml()
//         console.log('Table object created')
//     } else {
//         console.log("Error was thrown: " + error);
//     }
// });
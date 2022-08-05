let request = require("request");
let cheerio = require('cheerio');
const Table = require("./table");

class Scrapper {
    scrapperName = ''
    #url = 'https://www.afk.global/tier-list'
    table = null

    constructor(scrapperName) {
        let table
        this.scrapperName = scrapperName
        request(this.#url, function (error, _response, body) {
            if (!error) {
                let $pageBody = cheerio.load(body)
                const currentPatchElement = $pageBody('h2.vc_custom_heading')
                const currentPatchStr = cheerio.text(currentPatchElement)
                const tierTable = $pageBody('table.ninja_footable')

                let heroesList = [];
                tierTable.find('tbody > tr > td > a > strong').each(function (_index, element) {
                    let item = $pageBody(element).text()
                    if (item) {
                        heroesList.push(item);
                    }
                });

                table = new Table(tierTable, currentPatchStr, heroesList);
                console.log(`table1: ${table} `)
                table.saveToTxt()
                table.saveToHtml()
                console.log('Table object created')
            } else {
                console.log("Error was thrown: " + error);
            }
        });
        this.table = table
    }

    get table() {
        return this.table
    }
}


module.exports = Scrapper;
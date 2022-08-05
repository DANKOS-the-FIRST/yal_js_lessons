const fs = require("fs");
const path = require("path");

class Table {
    #tableHtml
    #patch
    #heroesList

    constructor(tableHtml, patch, heroesNames) {
        if (!tableHtml || !patch || !heroesNames) throw new Error()
        this.#tableHtml = tableHtml
        this.#patch = patch
        this.#heroesList = heroesNames
    }

    saveToTxt() {
        this.#writeDataToFile('Tier_table', this.#tableHtml, 'txt')
        this.#writeDataToFile('Heroes_list', this.#heroesList, 'txt')
    }

    saveToHtml() {
        this.#writeDataToFile('Tier_table', this.#tableHtml, 'html');
    }

    #writeDataToFile(filename, data, format) {
        let patch = this.#patch

        function writeToFileProcess() {
            fs.writeFile(path.join(__dirname, patch, `${filename}.${format}`), data.toString(), (err) => {
                if (err) {
                    fs.mkdir(path.join(__dirname, patch), (error) => {
                        if (error) {
                            console.log(`Folder "${patch}" exists already.`)
                        } else {
                            console.log(`New folder "${patch}" has been created.`)
                        }
                    })
                    writeToFileProcess()
                }
                console.log(`File "${filename}.${format}" was created!`)
            })
        }

        writeToFileProcess()
    }

    get heroes() {
        return this.#heroesList
    }

    get patch() {
        return this.#patch
    }

    get tableHtml() {
        return this.#tableHtml
    }
}

module.exports = Table;
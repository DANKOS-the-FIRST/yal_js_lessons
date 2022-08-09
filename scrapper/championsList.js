const fs = require("fs");
const path = require("path");

class ChampionsList {
    #data
    #patch
    #heroesList

    constructor() {
        console.log('ChampionsList ctor()')
    }

    async loadData(data, patch) {
        if (!data || !patch) throw new Error()
        this.#data = data
        this.#patch = patch
    }

    async saveToTxt() {
        await this.#makeDirForData()
        await this.#writeDataToFile('championsList data', this.#data, 'txt')
    }

    saveToHtml() {
        this.#writeDataToFile('Tier_table', this.#data, 'html');
    }

    #makeDirForData(){
        let patch = this.#patch

        return new Promise(function (resolve, reject) {
            fs.access("./directory-name", function(accessError) {
                if (accessError) {
                    console.log("Directory does not exist.")
                    fs.mkdir(path.join(__dirname, patch), (mkdirError) => {
                        if (mkdirError) {
                            console.log(`Folder "${patch}" exists already.`)
                            reject()
                        } else {
                            console.log(`New folder "${patch}" has been created.`)
                            resolve()
                        }
                    })
                    resolve()
                } else {
                    reject()
                }
            })
        })
    }

    #writeDataToFile(filename, data, format) {
        let patch = this.#patch

        return new Promise(function (resolve, reject) {
            fs.writeFile(path.join(__dirname, patch, `${filename}.${format}`), data.toString(), (err) => {
                if (err) {

                    console.log(`File "${filename}.${format}" was not created!`)
                    reject()
                } else {
                    console.log(`File "${filename}.${format}" was created!`)
                    resolve()
                }

            })
        })
    }

    get heroes() {
        return this.#heroesList
    }

    get patch() {
        return this.#patch
    }

    get data() {
        return this.#data
    }
}

module.exports = ChampionsList;
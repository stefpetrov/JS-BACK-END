const db = require('../db.json')
const fs = require('fs/promises')

const saveCat = (cat) => {
    db.cats.push(cat)

    let result = JSON.stringify(db, '', 2)

    return fs.writeFile('./db.json', result, {
        encoding: 'utf-8',

    })

}
const saveBreed = (breed) => {
    db.breeds.push(breed)

    let result = JSON.stringify(db, '', 2)

    return fs.writeFile('./db.json', result, {
        encoding: 'utf-8',

    })

}

const storageService = {
    saveCat,
    saveBreed
}

module.exports = storageService
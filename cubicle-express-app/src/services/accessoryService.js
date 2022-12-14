const Accessory = require("../models/Accessory")


const create = (name, description, imageUrl) => {
    let accessory = new Accessory({
        name,
        imageUrl,
        description
    })

    return Accessory.create(accessory)
}
async function getAll() {
    return Accessory.find({}).lean()
}

const accessoryService = {
    create,
    getAll
}

module.exports = accessoryService

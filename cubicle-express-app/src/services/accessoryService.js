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

async function getAllWithout(accessoryId) {
    return Accessory.find({ _id: { $nin: accessoryId } }).lean()
}

const accessoryService = {
    create,
    getAll,
    getAllWithout
}

module.exports = accessoryService

const Accessory = require("../models/Accessory")


const create = (name, description, imageUrl) => {
    let accessory = new Accessory({
        name,
        imageUrl,
        description
    })

    return Accessory.create(accessory)
}

const accessoryService = {
    create
}

module.exports = accessoryService

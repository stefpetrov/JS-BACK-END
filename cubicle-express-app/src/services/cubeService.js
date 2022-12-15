const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')


const getAll = () => Cube.find({}).lean() // .lean() return objects, not models

const getOne = (id) => Cube.findById(id).lean()

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty

    })

    return Cube.create(cube)
}
const search = (text, from, to) => {
    let result = getAll()
    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    }
    if (from) {
        result = result.filter(x => x.difficulty >= from)
    }
    if (to) {
        result = result.filter(x => x.difficulty <= to)
    }
    return result
}

const attachAccessory = async (cubeId, accessoryId) => {

    let cube = await Cube.findById(cubeId)
    let accessory = await Accessory.findById(accessoryId)

    cube.accessories.push(accessory)

    return cube.save()



}







const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory
}


module.exports = cubeService

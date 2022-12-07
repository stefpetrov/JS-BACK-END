const Cube = require('../models/Cube')

const cubeDb = []

const getAll = () => cubeDb.slice() // it is not so correct to refer directly to the array

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty)

    cubeDb.push(cube)
}

const cubeService = {
    create,
    getAll
}


module.exports = cubeService

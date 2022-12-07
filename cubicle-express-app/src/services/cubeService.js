const Cube = require('../models/Cube')

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Next level Cube',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/1202977061844295.QAOySrnyE0B5cIfqTxz5_height640_480x480.png?v=1663142818',
        difficulty: '4'
    }
]

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

const uniqid = require("uniqid")

class Cube {
    static cubes = [
        {
            id: 'jrj3h5j',
            name: 'Mirror Cube',
            description: 'Next level Cube',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/1202977061844295.QAOySrnyE0B5cIfqTxz5_height640_480x480.png?v=1663142818',
            difficulty: '4'
        }
    ]

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid()
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static get cubes() {
        return Cube.cubes.slice()
    }
    static add(cube) {
        Cube.cubes.push(cube)
    }

}

module.exports = Cube
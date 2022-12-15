const mongoose = require("mongoose")

const cubesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,

    },
    imageUrl: {
        type: String,
        retuired: true,
        validate: [/^https?:/i, "Invalid image URL"]
        // validate: {
        //     validator: function (value) {
        //         return /^https?:/i.test(value)
        //     },
        //     message: 'Image URl is invalid'
        // }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    accessories: [
        {
            type:mongoose.Types.ObjectId,
            ref:"Accessory"
        }
    ]
    

})

const Cube = mongoose.model('Cube', cubesSchema)

module.exports = Cube


















// const uniqid = require("uniqid")

// class Cube {
//     static cubes = [
//         {
//             id: 'jrj3h5j',
//             name: 'Mirror Cube',
//             description: 'Next level Cube',
//             imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/1202977061844295.QAOySrnyE0B5cIfqTxz5_height640_480x480.png?v=1663142818',
//             difficulty: '4'
//         }
//     ]

//     constructor(name, description, imageUrl, difficulty) {
//         this.id = uniqid()
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.difficulty = difficulty;
//     }

//     static get cubes() {
//         return Cube.cubes.slice()
//     }
//     static add(cube) {
//         Cube.cubes.push(cube)
//     }

// }

// module.exports = Cube
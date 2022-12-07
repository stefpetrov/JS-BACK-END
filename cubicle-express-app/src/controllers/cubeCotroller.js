const express = require('express')

const cubeService = require('../services/cubeService')
const router = express.Router()

const getCreateCubePage = (req, res) => {
    res.render('create')
    cubeService.getAll()

}
const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body
    cubeService.create(name, description, imageUrl, difficulty )
    res.redirect('/cube/create')
}


router.get('/create', getCreateCubePage)
router.post('/create', createCube)



module.exports = router

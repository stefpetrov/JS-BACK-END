const express = require("express")
const cubeController = require('./controllers/cubeCotroller')
const homeController = require('./controllers/homeCotroller')

const router = express.Router()

router.use(homeController)
router.use('/cube', cubeController)   // every URL starts with /cube is part of cubeController

module.exports = router

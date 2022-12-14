const express = require("express")
const cubeController = require('./controllers/cubeCotroller')
const homeController = require('./controllers/homeCotroller')
const accessoryController = require('./controllers/accessoryController')


const router = express.Router()

router.use(homeController)
router.use('/cube', cubeController)   // every URL starts with /cube is part of cubeController
router.use('/accessory', accessoryController)   

router.use('/*', (req, res) => res.render('404'))


module.exports = router

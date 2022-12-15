const router = require("express").Router({ mergeParams: true }) // get params from parent route
const cubeService = require("../services/cubeService")
const accessoryService = require("../services/accessoryService")

router.get('/add', async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId)
    let accessories = await accessoryService.getAll()

    res.render("cube/accessory/add", { cube, accessories })

})

router.post('/add', async (req, res) => {
    const cubeId = req.params.cubeId
    const accessoryId = req.body.accessory
    
    await cubeService.attachAccessory(cubeId, accessoryId)

    res.redirect(`/cube/${cubeId}`)

})

module.exports = router


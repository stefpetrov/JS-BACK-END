const express = require('express')
const router = express.Router()

// 1 controller with 2 actions

router.get('/stefan', (req, res) => {

    res.write('<h1>Hello from Stefan page</h1>')
    res.end()
})

router.get('/:catname', (req, res) => {
    if (req.params.catname == 'Stefcho') {
        res.redirect('/')
        return
    }

    res.header({
        'Content-Type': 'text/html'
    })
    res.status(200)
    res.write(`
    <h1>Load Cat Profile</h1>
    <h2>${req.params.catname}</h2>
    `)
    res.end()

})

module.exports = router
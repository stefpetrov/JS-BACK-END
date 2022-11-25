const express = require('express')


const app = express()


app.get('/', (req, res) => {

    res.header({
        'Content-Type': 'text/plain'
    })
    res.status(200)
    res.write('<h1>Hello world from Express</h1>')
    res.end()
})
app.listen(5000, () => console.log('Server is running on port 5000...'))

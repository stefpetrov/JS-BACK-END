const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")

const app = express()

handlebars.engine({layout: false})

app.set('views', path.resolve("./src/views") ) // change directory

app.engine('hbs',handlebars.engine({
    extname : 'hbs'
}))
app.set('view engine','hbs')

app.all('/', (req, res) => {
    res.render("index")
})

app.listen(5000, () => {
    console.log("App is running on http://localhost:5000")
})
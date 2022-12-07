const express = require("express")
const path = require('path')
const routes = require('./routes')

const initHandlebars = require("./config/handlebars")
const app = express()


initHandlebars(app)

app.use(express.static(path.resolve(__dirname, "./public")))
app.use(routes)






app.listen(5000, () => {
    console.log("App is running on http://localhost:5000")
})
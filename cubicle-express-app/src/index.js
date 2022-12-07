const express = require("express")
const path = require('path')
const routes = require('./routes')
const config = require('./config/config.json')[process.env.NODE_ENV]

const initHandlebars = require("./config/handlebars")
const app = express()

app.use(express.urlencoded({extended:true})) // needed for extracting data from url (req.body)


initHandlebars(app)

app.use(express.static(path.resolve(__dirname, "./public")))
app.use(routes)






app.listen(config.PORT, () => {
    console.log(`App is running on http://localhost:${config.PORT}`)
})
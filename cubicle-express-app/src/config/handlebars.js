const handlebars = require("express-handlebars")
const path = require("path")

const initHandlebars = (app) => {

    app.set('views', path.resolve(__dirname, "../views")) // change directory
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs')
}

module.exports = initHandlebars
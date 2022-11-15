const http = require("http");

let app = http.createServer((req, res) => {
    res.write('Hello Node.js')
    res.end()

})

app.listen(5000)

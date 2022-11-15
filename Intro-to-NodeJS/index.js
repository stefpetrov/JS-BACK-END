const http = require("http");

let app = http.createServer((req, res) => {


    switch (req.url) {
        case '/':
            res.write('<h1>HomePage</h1> <a href="/cats">Cats</a>')
            break;
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write('<h2>CatsPage</h2>')
            break;

        default:
            res.write('Error Page 404')
            break;
    }

    res.end()

})

app.listen(5000)


console.log("Server is running on port 5000...")

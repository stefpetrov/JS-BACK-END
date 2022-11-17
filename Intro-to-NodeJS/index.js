const http = require("http");
const fs = require("fs");


let app = http.createServer((req, res) => {


    switch (req.url) {
        case '/':
            res.write('<h1>HomePage</h1> <a href="/cats">Cats</a>')
            break;
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            let result = fs.readFileSync('./views/cats.html')
            // readFileSync is not correct, we use it only for this demo
            res.write(result)
            break;

        default:
            res.write('Error Page 404')
            break;
    }

    res.end()

    
})

app.listen(5000)


console.log("Server is running on port 5000...")

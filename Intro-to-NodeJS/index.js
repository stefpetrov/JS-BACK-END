const http = require("http");
const fs = require("fs");


let app = http.createServer((req, res) => {


    switch (req.url) {
        case '/':
            res.write('<h1>HomePage</h1> <a href="/cats">Cats</a>')
            res.end()

            break;
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            let result = fs.readFileSync('./views/cats.html')
            // readFileSync is not correct, we use it only for this demo
            res.write(result)
            res.end()

            break;
        case '/img/cat2':
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            })
            let catStream = fs.createReadStream('./img/cat2.jpeg')

            // catStream.on('data', (chunk) => {
            //     res.write(chunk)
            // })
            // catStream.on('end', () => {
            //     res.end()
            // })
            catStream.pipe(res)
            break

        default:
            res.write('Error Page 404')
            res.end()

            break;
    }



})

app.listen(5000)


console.log("Server is running on port 5000...")

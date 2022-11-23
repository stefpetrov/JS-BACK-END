const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            let content = fs.readFileSync('./views/home/index.html')
            res.writeHead(200, {
                "Content-Type": 'text/html'
            })
            res.write(content)
            res.end()
            break;
        case '/styles/site.css':
            let cssContent = fs.readFileSync('./styles/site.css')
            res.writeHead(200, {
                "Content-Type": 'text/css'
            })
            res.write(cssContent)
            res.end()
            break;
        case '/js/script.js':
            let js = fs.readFileSync('./js/script.js')
            res.writeHead(200, {
                "Content-Type": 'text/javascript'
            })
            res.write(js)
            res.end()
            break
        case '/img/cat1':
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            })
            let catStream = fs.createReadStream('./img/cat1.jpeg')
            // catStream.on('data', (chunk) => {
            //     res.write(chunk)
            // })
            // catStream.on('end', () => {
            //     res.end()
            // })
            catStream.pipe(res)
            break


        default:
            res.statusCode = 404
            res.end()
            break;
    }


})

app.listen(5000)

console.log('App is running on port 5000')

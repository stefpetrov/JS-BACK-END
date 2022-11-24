const http = require('http')
const fs = require('fs')
const formidable = require('formidable')
const storageService = require('./services/storageService.js')

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
        case '/cats/add-cat':
            if (req.method === "GET") {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })

                fs.readFile('./views/addCat.html', (err, result) => {
                    if (err) {
                        res.statusCode = 404
                        res.end()
                        return
                    }

                    res.write(result)
                    res.end()
                })


            } else if (req.method === 'POST') {
                let form = new formidable.IncomingForm()
                form.parse(req, (err, fields, files) => {

                    storageService.saveCat(fields)
                        .then(() => {
                            res.end()
                        })
                })

                res.writeHead(302, {
                    "Location": "/"
                })

            }

            break


        case '/cats/add-breed':
            let contentBreed = fs.readFileSync('./views/addBreed.html')
            res.writeHead(200, {
                "Content-Type": 'text/html'
            })
            res.write(contentBreed)
            res.end()
            break;


        default:
            res.statusCode = 404
            res.end()
            break;
    }


})

app.listen(5000)

console.log('App is running on port 5000')

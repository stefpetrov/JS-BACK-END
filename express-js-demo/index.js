const express = require('express')

const catController = require('./controlers/catControler.js')

const app = express()

app.use(express.static('./public'))

// we use catController as a middleware
app.use('/cats', catController)

app.get('/', (req, res) => {
    res.sendFile('./views/home/index.html', {
        root: __dirname
    })
})


// app.get('/', (req, res) => {

//     res.header({
//         'Content-Type': 'text/html'
//     })
//     res.status(200) 
//     res.write(`
//     <h1>Home</h1>
//     <ul>
//         <li><a href="/addBreed">Add Breed</a></li>
//         <li><a href="/addCat">Add Cat</a></li>
//     </ul>
//     `)
//     res.end()
// })


app.get('/addBreed', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.status(200)
    res.write('<h1>Add Breed</h1>')
    res.end()
})
app.get('/addCat', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.status(200)
    res.write('<h1>Add Cat</h1>')
    res.end()
})
// app.get('/cat/:catname', (req, res) => {
//     if (req.params.catname == 'Stefcho') {
//         res.redirect('/')
//         return
//     }

//     res.header({
//         'Content-Type': 'text/html'
//     })
//     res.status(200)
//     res.write(`
//     <h1>Load Cat Profile</h1>
//     <h2>${req.params.catname}</h2>
//     `)
//     res.end()

// })
app.get('/send-file', (req, res) => {
    res.sendFile('./images/cat1.jpeg', {
        root: __dirname
    })
})

app.get('/download', (req, res) => {
    res.download('./images/cat1.jpeg')
})
app.get('/data', (req, res) => {
    // it is not mandatory
    // res.header({
    //     'Content-Type': 'application/json'
    // })
    res.json({ name: "Stefcho", age: 2 })
    res.end()
})

app.get('/add*', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.status(200)
    res.write('<h1>Add Something</h1>')
    res.end()
})
//match with regex
app.get(/.*cat.*/, (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.status(200)
    res.write('<h1>Add cat with Regex match</h1>')
    res.end()
})




app.listen(5000, () => console.log('Server is running on port 5000...'))

const fs = require('fs')
const fspromise = require('fs/promises')

// Sync
// let text = fs.readFileSync('./index.html',{
//     encoding:"utf-8"
// })

// Async
fs.readFile('./index.html', 'utf-8', (error, data) => {
    if (error) {
        throw new Error(error)
    }
    console.log(data)
})

// Promises
fspromise.readFile('./index.html', "utf-8")
    .then(text => {
        console.log(text)
    }).catch(error => {
        throw error
    })

// Async / await

async function readFile(path) {
    let text = await fs.readFile(path, "utf-8")
    console.log(text)
}
readFile('./index.html')




console.log('End')

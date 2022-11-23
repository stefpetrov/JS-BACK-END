const fs = require("fs")

const readableStream = fs.createReadStream('./index.html', {
    encoding: "utf-8",
    highWaterMark: 1024
    // we reduce size of chunk

})

const writableStream = fs.createWriteStream('output.txt')

readableStream.on('data', function (chunk) {
    console.log('new chunk')
    console.log('new chunk')
    console.log('new chunk')

    // console.log(chunk)
    writableStream.write(chunk)


})

readableStream.on('end', () => {
    console.log('Stream ended')
    writableStream.end()
})


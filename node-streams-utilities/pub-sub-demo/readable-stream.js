const fs = require("fs")

const readableStream = fs.createReadStream('./index.html', {
    encoding: "utf-8",
    highWaterMark: 1024
    // we reduce size of chunk

})

readableStream.on('data', function (chunk) {
    console.log('new chunk')
    console.log('new chunk')
    console.log('new chunk')

    console.log(chunk)
})

readableStream.on('end', () => {
    console.log('Stream ended')
})
var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('hello, world!')
})

app.listen(8000, () => {
    console.log('server started.')
})

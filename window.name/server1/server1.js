const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.listen(4000,() => {
    console.log('run at 4000..')
})
const express = require('express')
var fs = require('fs')

const app = express()

app.use('/',(req,res) => {
    let filename = './views/target.html'
    fs.readFile(filename, 'utf-8',(err,data) => {
        if(err) {
            throw err
        }
        res.end(data)
    } )
})

app.listen('4000',() => {
    console.log('running at port 4000...')
})
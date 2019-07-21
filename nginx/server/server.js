const express = require('express')

const app = express()

app.get('/123',(req,res) => {
    console.log('qqqq')
    res.end('dddddhhh')
})

app.listen(3000,() => {
    console.log('running at 3000...')
})
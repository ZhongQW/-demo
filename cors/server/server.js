const express = require('express')
var bodyParser = require('body-parser')

const app = new express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log(req.headers.origin);
    const {origin} = req.headers
    // 设置哪个源可以访问我
    res.header('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    // 允许哪个方法访问我
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS')
    // 允许携带cookie
    res.header('Access-Control-Allow-Credentials', true)
    if (req.method === 'OPTIONS') {
        res.send('hh')
    } else {
        next()
    }
})

app.put('/test', function (req, res) {
    console.log(req.body)
    res.end('request success')
})

app.listen(3000, () => {
    console.log('app running at port 3000...')
})
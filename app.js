const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const layout = require('./views/layout')

const path = require('path')
const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'stylesheets')));
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req,res) => {
    res.send(layout(''))
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("Listening to port 3000")
})
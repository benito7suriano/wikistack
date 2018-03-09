const router = require('express').Router()
const addPage = require('../views/addPage')

router.get('/', (req, res) => {
    res.send('go to GET /wiki')
})

router.post('/', (req, res) => {
    res.send('go to POST /wiki')
})

router.get('/add', (req, res) => {
    res.send(addPage())
})


module.exports = router
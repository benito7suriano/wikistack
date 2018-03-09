const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const layout = require('./views/layout')
const path = require("path");
const {db} = require('./models/');

const app = express();
const PORT = 3000;

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'stylesheets')));
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req,res) => {
    res.send(layout(''))
})

    app.listen(PORT, () => {
        console.log("Listening to port 3000")
        console.log(db);
    })


db.authenticate().then(() => {
  console.log("Connected to the database");
  console.log(db);
});

// const start = async () => {
//     await db.sync();

//     app.listen(PORT, () => {
//         console.log("Listening to port 3000")
//     })
// }

// start();



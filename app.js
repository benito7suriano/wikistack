const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const layout = require('./views/layout')
const path = require("path");
const {db} = require('./models/');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const app = express();
const PORT = 3000;

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'stylesheets')));
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req,res) => {
    res.redirect('/wiki')
})
app.use('/wiki', wikiRouter);

db.authenticate().then(() => {
  console.log("Connected to the database");
});

const start = async () => {
    await db.sync();

    app.listen(PORT, () => {
        console.log("Listening to port 3000")
    })
}

start();



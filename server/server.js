const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const User = require('./models/User.js');



const app = express()
const PORT = process.env.PORT || 3000
let reqPath = path.join(__dirname, '../');

// Middlewares and statiic files
app.use(express.static(reqPath + './client'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());



app.get('/', (req, res) => {
    res.sendFile(reqPath + '../client/index.html')
    // console.log(reqPath)

})

// Create DB connection
const dbURI = "mongodb+srv://shreyash:dEXZ4fj3Ubnj9Yn@cluster0.iluxe3x.mongodb.net/resumeBuilder?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to DB")
    }).catch((error) => {
        console.log(error)
    })


    app.get('/show-Students', (req, res) => {

        User.find()
            .then((result) => {
                res.send(result)
            }).catch((error) => {
                res.send(error)
            })
    
    })






app.listen(PORT, () => {
    console.log("Listning on port " + PORT)
})

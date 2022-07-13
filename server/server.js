const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')



const app = express()
const PORT = process.env.PORT || 3000
let reqPath = path.join(__dirname, '../');

// Middlewares
app.use(express.static(reqPath + './client'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());





app.get('/', (req, res) => {
    res.sendFile(reqPath + '../client/index.html')
    // console.log(reqPath)
    
})




app.listen(PORT, ()=> {
    console.log("Listning on port " + PORT)
})

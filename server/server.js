const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log("Listning on port" + PORT)
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

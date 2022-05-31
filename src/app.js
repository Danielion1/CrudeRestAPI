const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8000
require("./MongoDBConnection/connection")
const pastorsRoute = require("./Routers/pastorsRoute")

const app = express()
app.use(express.json())
app.use(cors());
app.use(pastorsRoute)

app.listen(port, () =>{
    console.log(`${port} has connection`)
})
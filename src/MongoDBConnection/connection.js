const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/firstloveData")
.then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log("connection failed")
    console.log(err)
})
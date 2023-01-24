const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/characterdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected to Character database!"))
.catch((err)=>{console.log(err)})
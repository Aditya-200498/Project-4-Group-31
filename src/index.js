const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const route = require('./routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://Aditya1998:aadi1998@cluster0.zl7lv.mongodb.net/OurProject-4?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

    .then(() => console.log("MongoDB is Connected."))
    .catch((err) => console.log(err.message))

app.use('/', route);


app.listen(process.env.PORT || port, function () {
    console.log("Express app is running on ", process.env.PORT || port)
})
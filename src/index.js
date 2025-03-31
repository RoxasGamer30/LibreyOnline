const express = require("express");
const app = express();

//middleware
app.use(express.json);
app.use(express.urlencoded({extended: false}))

//Routes
app.use(require("../src/Routes/index"))

app.listen(3000);
console.log("server on port 3000")

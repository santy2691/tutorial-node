const express = require('express');
const indexRoutes = require('./routes/index');


let app = express();


app.use(express.urlencoded())
const path = __dirname + '/views/';




app.use(express.static(path));
app.use(indexRoutes);


app.listen(3000,()=>{
    console.log("app listening on port 3000");
});
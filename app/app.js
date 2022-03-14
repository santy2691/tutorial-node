const express = require('express');
const indexRoutes = require('./routes/index');
 mongoose = require('mongoose');

let app = express();
http = require('http');



mongoose.connect('mongodb://root:pass12345@localhost:27017/tutorial_node?authSource=admin',{
      useUnifiedTopology: true, 
      useNewUrlParser: true },
    (err, res) => {
        if (err) console.log(`ERROR: connecting to Database.  ${err}`);
        else console.log(`Database Online:`);
    }
);

app.use(express.urlencoded())
const path = __dirname + '/views/';


app.use(express.static(path));
app.use(indexRoutes);


app.listen(3000,()=>{
    console.log("app listening on port 3000");
});

let User = require('../models/user')


// mira si es mayor
exports.isMayor = function(req,res) {
    let esMayor = parseInt(req.body.age) >= 18  ? " si eres mayor " : " no eres mayor "
    let nombre = req.body.name;
    return res.send(esMayor + nombre );
};


exports.createUser = function(req,res) {
    let user = new User({name: req.body.name, age: req.body.age});
    try{
        user.save(function (err) {
        if (err) console.log(err)
        // saved!
      });
        res.end("datos guardados");
    }catch(e){
        console.log(e);
    }
};


exports.list = function(req,res) {
    User.find(function(err,users){
        res.send(users);
    });
}


exports.find = function(req,res) {
    User.find({name: "santiago"},function (err,user){
        res.send(user);
    });
}


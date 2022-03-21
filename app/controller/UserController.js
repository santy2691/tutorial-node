
let User = require('../models/user')


// mira si es mayor
exports.isMayor = function(req,res) {
    let esMayor = parseInt(req.body.age) >= 18  ? " si eres mayor " : " no eres mayor "
    let nombre = req.body.name;
    let respestaBD = createUser({name: req.body.name, age: req.body.age});
    if (respestaBD === "not_success") {
        return res.send("el usuario " + nombre + "no se pudo guardar");
    }
    return res.send(esMayor + nombre );
};


const createUser = function({name, age}) {
    let user = new User({name:name, age: age});
    try{
        user.save(function (err) {
        if (err) console.log(err)
        // saved!
      });
        return {respuesta :"success"};
    }catch(e){
        return {respuesta : "not_success"};
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


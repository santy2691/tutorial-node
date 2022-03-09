


exports.isMayor = function(req,res) {
    let esMayor = parseInt(req.body.age) >= 18  ? " si eres mayor " : " no eres mayor "
    let nombre = req.body.name;
    return res.send(esMayor + nombre );
};

const express = require('express')
const router = express.Router();
const User = require('../controller/User')

router.get('/', (req,res)=>{
    res.sendFile('index.html');
});


router.post('/mayor', User.isMayor);

module.exports = router;
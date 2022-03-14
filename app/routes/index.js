const express = require('express')
const router = express.Router();
const UserController = require('../controller/UserController')

router.get('/', (req,res)=>{
    res.sendFile('index.html');
});


router.post('/mayor', UserController.isMayor);
router.post('/createUser', UserController.createUser);

router.get('/list',UserController.list);

router.get('/find',UserController.find);

module.exports = router;
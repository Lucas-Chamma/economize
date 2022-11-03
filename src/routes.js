const express = require('express');
const router = express.Router();

const Auth = require('./middleware/Auth');

const AuthController = require('./controllers/AuthController');
const ProdtController = require('./controllers/ProdtController');
const UserController = require('./controllers/UserController');

router.get('/sobre', (req, res) => {
    res.send('Oi')
})


router.get('/user/me', Auth.private, UserController.getinfo);
router.get('/prod/list', ProdtController.listProd);
router.get('/prod/item', ProdtController);

router.post('/user/login', AuthController.login);
router.post('/user/cadastro', AuthController.cadastro);
router.post('/user/cadastro/emp', AuthController.cadastroEmp);
router.post('/prod/add', ProdtController.addProd);

router.put('/user/me',UserController.edit);
router.put('/prod/edit',ProdtController.edit);



module.exports = router;
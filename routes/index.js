const express = require('express');
const router = express.Router();
const controller = require ("../controllers/indexController");

/* GET home page. */
router.get('/', controller.index);
router.get('/cocinas', controller.search);
router.get('/living', controller.categoria);
router.get('/dormitorios', controller.categorias);
router.get('/office', controller.subcategoria);
router.get('/sobre-nosotros', controller.sobreNosotros);


module.exports = router;

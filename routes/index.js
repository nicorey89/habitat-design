const express = require('express');
const router = express.Router();
const controller = require ("../controllers/indexController");

/* GET home page. */
router.get('/', controller.index);
router.get('/cocinas-a-medida', controller.search);
router.get('/accesorios-de-cocina', controller.categoria);
router.get('/vestidores-a-medida', controller.categorias);
router.get('/nuestras-obras', controller.subcategoria);
router.get('/sobre-nosotros', controller.sobreNosotros);


module.exports = router;

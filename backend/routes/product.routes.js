const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.post('/', controller.create);
router.post('/variation', controller.addVariation);
router.get('/', controller.getAll);

router.get('/:id', controller.getById);

module.exports = router;

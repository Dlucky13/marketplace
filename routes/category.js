const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/category')

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.patch('/:id', controller.update);


module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth')
const upload = require('../middleware/upload')

router.post('/login', controller.login );
router.post('/register', upload.single('image'), controller.register);

module.exports = router;
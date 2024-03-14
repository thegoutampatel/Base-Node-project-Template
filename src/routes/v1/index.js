const express = require('express');
const { infoController } = require('../../Controllers');

const router = express.Router();

router.get('/info', infoController.info);

module.exports = router;



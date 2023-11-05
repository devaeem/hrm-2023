const express = require("express");
const router = express.Router();
const {createposition,listposition} = require('../Controllers/positionControllers')

router.get('/position',listposition)


  router.post('/position',createposition)


module.exports = router;
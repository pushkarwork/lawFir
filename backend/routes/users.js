var express = require('express');
const formData = require('../controllers/form');
var router = express.Router();

/* GET users listing. */
router.route("/formData").post(formData)

module.exports = router;

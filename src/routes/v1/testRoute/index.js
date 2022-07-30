const express = require('express');
const validate = require('../../../middlewares/validate');
const testController = require('../../../controllers/testController');
const testValidation = require('../../../validations/testValidation');

const router = express.Router();

router.route('/test').post(validate(testValidation.createTest), testController.createTest);

module.exports = router;

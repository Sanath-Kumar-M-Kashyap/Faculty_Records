const express = require('express');
const facultyController = require('../controllers/facultyController');

const router = express.Router();

// GET all faculty
router.get('/', facultyController.getAllFaculty);

// POST new faculty
router.post('/', facultyController.addFaculty);

module.exports = router;

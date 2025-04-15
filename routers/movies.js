const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieController');

/* Index */
router.get('/', MovieController.index)

/* Show */
router.get('/:id', MovieController.show)

module.exports = router;
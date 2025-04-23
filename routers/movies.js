const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieController');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

/* Index */
router.get('/', MovieController.index)

/* Show */
router.get('/:id', MovieController.show)

/* Store */
router.post('/:id/review', MovieController.store)

/* Create new movie */
router.post('/create', upload.single('image'), MovieController.create)

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/add-cube', (req, res) => {
    res.send('<h1>Add Cube Page</h1>');
});

module.exports = router;
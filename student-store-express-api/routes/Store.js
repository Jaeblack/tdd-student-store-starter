const express = require('express')
const router = express.Router();
const Store = require('../models/Store');



router.get('/', (req, res) => {
    const all = Store.getAll();
    res.status(200).send(all);
})




module.exports = router;

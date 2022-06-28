const express = require('express')
const router = express.Router();
const Store = require('../models/Store');



router.get('/', (req, res) => {
    const products = Store.getAll();
    res.status(200).send({ products : products});
})




module.exports = router;

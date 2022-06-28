const express = require('express')
const router = express.Router();
const Store = require('../models/Store');



router.get('/', (req, res) => {
    const products = Store.getAll();
    res.status(200).send({ products : products});
})

router.get('/:productId', (req, res) => {
    const product = Store.getProduct(req.params.productId);
    res.status(200).send({ product : product});
})




module.exports = router;

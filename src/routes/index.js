const express = require('express');
const routerUser = require('./user.routers');
const routerCategory = require('./category.routers');
const routerProduct = require('./product.routers');
const routerImage = require('./image.routers');
const routerCart = require('./cart.routers');
const routerPurchase = require('./purchase.routers');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/categories', routerCategory)
router.use('/products', routerProduct)
router.use('/products_imgs', routerImage)
router.use('/cart', routerCart)
router.use('/purchases', routerPurchase)

module.exports = router;
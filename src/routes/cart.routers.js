const { getAll, create, getOne, remove, update } = require('../controllers/cart.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerCart = express.Router();

routerCart.route('/')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

routerCart.route('/:id') 
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerCart;
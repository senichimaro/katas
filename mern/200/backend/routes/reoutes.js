const express = require('express')
const api = express.Router()
const { createResponse, getProducts } = require('../controllers/controllers')


api.get('/', getProducts)
api.post('/post', createResponse)



module.exports = api

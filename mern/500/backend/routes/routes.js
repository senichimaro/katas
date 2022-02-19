const express = require('express')
const endpoints = express.Router()
const {
  getMessage,
  postMessage,
  editMessage,
  deleteMessage
} = require('../controllers/controllers')

endpoints.get('/', getMessage )

endpoints.post('/post', postMessage )

endpoints.put('/edit', editMessage )

endpoints.delete('/delete', deleteMessage )



module.exports = endpoints

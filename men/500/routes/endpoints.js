const express = require('express');
const endpoints = express.Router();
const { reqHome, createPost, findPostId, editPost } = require('../controllers/controllers')


endpoints.get('/', reqHome )
endpoints.post('/create', createPost )
endpoints.post('/getpostid', findPostId )
endpoints.post('/edit', editPost )


module.exports = endpoints;

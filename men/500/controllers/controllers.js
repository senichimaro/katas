const { resJson } = require('./utils')
const BlogPost = require('../database/model/BlogPost')

async function reqHome( req, res ){
  try{
    const posts = await BlogPost.find().lean().exec();
    // if ( posts ) resJson(res, true, posts)
    // else resJson(res, false, posts)
    resJson(res, false, posts)
  }
  catch(e){
    console.error(`ERROR at controllers.js in reqHome: ${e.message}`);
  }
}

async function createPost( req, res ){
  try {
    const { title, paragraph, tags, keywords } = req.body;
    // console.log("req.body",req.body);
    const Post = await BlogPost.create({
      title, paragraph, tags, keywords
    })

    const postSaved = await Post.save()

    resJson( res, false, postSaved )
    // resJson( res, false, 'backend eco' )

  }
  catch(e){
    throw new Error(e.message)
  }
}

async function findPostId( req,res ){
  try {
    const { _id } = req.body;
    // console.log("req.body",req.body);
    // console.log("_id",_id);
    BlogPost.findById(
      _id,
      (err,data) => resJson(res,err,data)
    )
  }
  catch(e){
    throw new Error(e.message)
  }
}

async function editPost( req,res ){
  try {
    console.log("editPost req.body",req.body);
    const { _id, title, paragraph } = req.body
    BlogPost.findByIdAndUpdate(
      _id,
      {
        title:title,
        paragraph:paragraph
      },
      (err,data) => resJson(res,err,data)
    )
  }
  catch(e){
    throw new Error(e.message)
  }
}

module.exports = {
  reqHome,
  createPost,
  findPostId,
  editPost
}

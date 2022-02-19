import axios from 'axios'

export async function requestPosts(){
  try {
    const response = await axios({
      mehotd:'GET',
      url:process.env.REACT_APP_BACKEND_BASE_URL
    })
    return response;
  }
  catch(e){
    throw new Error(e.message)
  }
}

export async function createPost( data ){
  try {
    const formData = data;
    const response = await axios({
      method:'POST',
      url:`${process.env.REACT_APP_BACKEND_BASE_URL}/create`,
      data:formData
    })
    return response;
  }
  catch(e){
    throw new Error(e.message)
  }
}

export async function getPostId( _idPost ){
  // console.log("_idPost",_idPost);
  try {
    const is_ID= _idPost;
    const response = await axios({
      method:'POST',
      url:`${process.env.REACT_APP_BACKEND_BASE_URL}/getpostid`,
      data:{_id:is_ID}
    })
    return response;
  }
  catch(e){
    throw new Error(e.message)
  }
}

export async function updatePost( postData ){
  try {
    console.log("postData",postData);
    const response = axios({
      method:'POST',
      url:`${process.env.REACT_APP_BACKEND_BASE_URL}/edit`,
      data:postData
    })
    return response
  }
  catch(e){
    throw new Error(e.message)
  }
}

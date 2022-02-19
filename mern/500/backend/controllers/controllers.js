




async function getMessage( req , res ){
  try {
    res.status(200).send({ "success":true , "data":"endpoint ready"})
  }
  catch ( e ) {
    console.error(`ERROR at controllers.js getMessage: ${e.message}`);
  }
}


async function postMessage( req , res ){
  try {
    res.status(200).send({ "success":true , "data":{ ...req.body } })
  }
  catch ( e ) {
    console.error(`ERROR at routes.js postMessage: ${e.message}`);
  }
}


async function editMessage( req , res ){
  try {
    if ( req.body.id ) res.status(200).send({ "success":true , "data":{ ...req.body } })
    else res.status(400).send({ "success":false , "data":"id is required" })
  }
  catch ( e ) {
    console.error(`ERROR at routes.js editMessage: ${e.message}`);
  }
}


async function deleteMessage( req , res ){
  try {
    if ( req.body.id ) res.status(200).send({ "success":true , "data":{ ...req.body } })
    else res.status(400).send({ "success":false , "data":"id is required" })
  }
  catch ( e ) {
    console.error(`ERROR at routes.js deleteMessage: ${e.message}`);
  }
}



module.exports = {
  getMessage,
  postMessage,
  editMessage,
  deleteMessage
}

const resFunction = require('./responseUtils')
const ObjModel = require('../model/ObjModel')


// const data = [{
//   title:"Lorem Ipsum",
//   textarea:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// }]

async function createResponse(req,res){


  const {
    title,
    textarea
  } = req.body;

  console.log("title", title);
  
  const newObject = ObjModel({
    title,
    textarea
  })

  const productStored = await newObject.save()
  res.status(201).send({productStored})


  // const obj = await ObjModel.create(
  //   {...req.body},
  //   // {
  //   //   title,
  //   //   textarea
  //   // },
  //   (err,data)=> resFunction(res,err,data)
  // )
  // res.status(201).send(data)
}

async function getProducts(req,res){
  await ObjModel.find(
    {},
    (err,data)=> resFunction(res,err,data)
  )
  // await res.json(data)
}

module.exports = {
  createResponse,
  getProducts
}

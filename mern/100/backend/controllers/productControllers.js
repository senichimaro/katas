
const Product = require('../models/Products')

async function addProduct(req,res){
  console.log("req.body",req.body);
  try {
    const {
      name,
      size,
      unitaryPrice,
      description
    } = req.body;

    const product = Product({
      name,
      size,
      unitaryPrice,
      description
    })

    if( req.file ){
      const { filename } = req.file;
      const fullUrl = `${req.protocol}://${req.get('host')}`;
      product.setImgUrl(fullUrl,filename)
    }

    const productStored = await product.save()

    res.status(201).send({ productStored })
  }
  catch(e){
    res.status(500).send({ success:false,message:e.message })
  }
}

async function getProducts(req,res){
  const products = await Product.find().lean().exec()
  res.status(200).send({ products })
}

module.exports = {
  addProduct,
  getProducts
}

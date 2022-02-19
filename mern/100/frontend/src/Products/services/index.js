import axios from 'axios'


const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProducts(){
  try {
    const response = await axios({
      url:`${baseUrl}/products`,
      method:'GET'
    })
    return response
  }
  catch(e){
    console.error(`error: ${e.message}`);
  }
}


export async function saveProduct(productData){
  try {
    const formData = new FormData()
    formData.append('name', productData.name)
    formData.append('size', productData.size)
    formData.append('priceUnitary', productData.priceUnitary)
    formData.append('description', productData.description)
    // image is the field name that router is waiting for
    formData.append('image', productData.image)
    const response = await axios({
      url:`${baseUrl}/products`,
      method:'POST',
      data:formData
    })
    return response
  }
  catch(e){
    console.error(`error: ${e.message}`);
  }
}

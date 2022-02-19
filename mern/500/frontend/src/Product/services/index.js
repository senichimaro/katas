import axios from 'axios'

// const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
const baseUrl = process.env.REACT_APP_BACKEND_API_SPACE_URL

export async function getData(){
  try {
    const response = await axios({
      method:'GET',
      url:`${baseUrl}`
    })
    return response
  }
  catch ( e ) {
    console.error(`ERROR at service/index.js getData: ${e.message}`);
  }
}

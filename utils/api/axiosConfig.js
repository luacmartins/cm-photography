import axios from 'axios'

const fetchApi = axios.create({
   baseURL: process.env.API_BASE_URL,
   headers: {
      'X-Pwinty-MerchantId': process.env.MERCHANT_ID,
      'X-Pwinty-REST-API-Key': process.env.API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
   }
})

export default fetchApi
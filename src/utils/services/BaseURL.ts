import axios from 'axios'

const url: string = 'http://localhost:3000/shm/api/v1'

const customerFetch = axios.create({
  baseURL: url,
})

export const getProducts = () => {
  return customerFetch.get('/product')
}

export const searchProducts = (query: string) => {
  return customerFetch.get(`/product/search?${query}`)
}

export const fetchSingleProducts = (productId: string) => {
  return customerFetch.get(`/product/65522c57b6a85fc6b5f055f7`)
}

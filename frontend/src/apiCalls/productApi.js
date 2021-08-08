import { useQuery } from 'react-query'
import { getAllProducts } from './axiosCalls'

export const GetAllProducts = () =>{
   const response = useQuery('products', getAllProducts)
   return response
}
import axios from 'axios'
export const getAllProducts = async() =>{
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:4000/api/products',
    })
    return res
}
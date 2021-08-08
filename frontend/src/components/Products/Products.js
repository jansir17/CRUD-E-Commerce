import React from 'react';
import { GetAllProducts } from '../../apiCalls/productApi';
import Loader from 'react-loader-spinner';
import SingleProduct from './SingleProduct';
import './product.css'

const Products = () => {
    const {isLoading,isError,data} = GetAllProducts()
    if(isLoading){
        return(
            <Loader className="loader"
                        type="Puff"
                        color="#00BFFF"
                        height={500}
                        width={500}
                    />
        )
    }
    else if(isError){
        return(
            <h1>An error occured, please refresh the page and try again</h1>
        )
    }
    else if(data){
        return (
            <React.Fragment>
            <h1 className="text-center mt-4" >Products List</h1>
            {
                data && data.data.map(product=><SingleProduct key={product._id} product={product} ></SingleProduct>)
            }
            </React.Fragment>
        );
    }
    
};

export default Products;
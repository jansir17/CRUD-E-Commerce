import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { currencyConverter } from '../../helperMethods/currencyConverter';

const SingleProduct = ({ product }) => {
    const { imageUrl, name, price, productUrl } = product;
    return (
        <div className="single-product" >
            <Container>
                <Row>
                    <Col sm={3} >
                        <a href={productUrl} ><img src={imageUrl} alt="" /></a>
                    </Col>
                    <Col sm={9} >
                      <h2>{name}</h2>
                      <h4>BDT. {currencyConverter(price)}</h4>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleProduct;
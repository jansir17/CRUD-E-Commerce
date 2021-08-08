import React from 'react';
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className="text-center mt-4 " >
        <Link to={'/products'}>Go to Products Page</Link>
        </div>
    );
};

export default Hero;
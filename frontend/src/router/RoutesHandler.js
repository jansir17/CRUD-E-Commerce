import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Hero from '../components/Hero';
import Products from '../components/Products/Products';


const RoutesHandler = () => {
    return (
        <Router>
        <Switch>
        <Route exact path = '/' component={Hero} />
        <Route exact path = '/products' component={Products} />
        </Switch>
        </Router>
    );
};

export default RoutesHandler;
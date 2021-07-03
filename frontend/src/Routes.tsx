import Navbar from 'pages/components/Navbar';
import Home from 'pages/Home';
import Product from 'pages/Product';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <>
    <Navbar />
    <BrowserRouter>
        
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Product />
            </Route>
        </Switch>
    </BrowserRouter>
</>
);

export default Routes;
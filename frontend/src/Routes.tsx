import Navbar from 'pages/components/Navbar';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Product from 'pages/Product';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Product />
            </Route>
            <Route path="/contacts">
                <Contacts />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import TermsAndConditions from './pages/terms/TermsAndConditions';
import Login from './pages/login/Login';
import Page404 from './pages/notfound/Page404';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import './utils/utility-classes.css';
import Product from './pages//product/Product';
import Favorites from './pages/favorites/Favorites';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/about" component={About}/>
        <Route path="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;

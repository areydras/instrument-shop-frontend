import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Products from './pages/products'
import SearchProducts from './pages/searchProducts'
import ProductDetails from './pages/productDetails'

import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import Transactions from './pages/transactions'

import Search from './search'

const Main = () => {
    return ( 
        <Router>
            <main className="container">                    
                <Search />
                <div className="row p-3 pt-4">
                    <div className="row ml-md-1 w-100" style={{ margin: '2.5vh 0' }}>
                        
                        <Route path="/" exact component={ Home } />
                        <Route path="/products/category/:category" component={ Products } />
                        <Route path="/products/search/:search/:offset/:limit" component={ SearchProducts } />
                        <Route path="/product-details/:product" component={ ProductDetails } />

                        <Route path="/carts" component={Cart} />
                        <Route path="/wishlists" component={Wishlist} />
                        <Route path="/transactions" component={Transactions} />

                    </div>
                </div>
            </main>
        </Router>
     );
}
 
export default Main;
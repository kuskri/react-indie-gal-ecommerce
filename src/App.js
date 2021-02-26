import './App.css';
import React, {useState, useEffect} from 'react';
import ProductPage from './ProductPage';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';
import Signup from './Signup';
import AboutUs from './AboutUs';
import OurEthics from './OurEthics';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop'
import MyAccount from './MyAccount';
import ShoppingCart from './ShoppingCart';
import ProductsList from './ProductsList'
import {data} from './Products'
import Category from './Category';
import Brand from './Brand';



const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  //adding products to cart. if the prod id already exist in cart, then augmenting only quantity
  const onAdd = (product) => {
    const alreadyInCart = cartItems.find((prevProduct) => prevProduct._id === product._id);
    if(alreadyInCart) {
      setCartItems(
        cartItems.map((prevProduct) => 
      prevProduct._id === product._id ? {...alreadyInCart, qty: alreadyInCart.qty + 1} : prevProduct))
    } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  //removing products from cart
  const onRemove = (product) => {
    const existsInCart = cartItems.find((prevProduct) => prevProduct._id === product._id);
    if(existsInCart.qty === 1) {
      setCartItems(cartItems.filter((prevProduct) => prevProduct._id !== product._id));
    } else {
      setCartItems(cartItems.map((prevProduct) => 
        prevProduct._id === product._id ? {...existsInCart, qty: existsInCart.qty - 1} : prevProduct))
    }
  };

  //deleting items from cart
  const onDelete = (product) => {
    const existsInCart = cartItems.find((prevProduct) => prevProduct._id === product._id);
    if(existsInCart) {
      setCartItems(cartItems.filter((prevProduct) => prevProduct._id !== product._id));
    }
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems]);

  const getTotalCartItems = cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.qty, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header countCartItems={getTotalCartItems} />
        <Switch>
          
          <Route path="/products/:id"><ProductPage products={products} onAdd={onAdd} /></Route>
          <Route path="/category/:category" ><Category products={products} onAdd={onAdd} /></Route>
          <Route path="/brand/:brand" exact><Brand products={products} onAdd={onAdd} /></Route>
          <Route path="/shopping-cart" ><ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} products={products} /></Route>
          <Route path="/products" exact><ProductsList products={products} onAdd={onAdd} /></Route>
          <Route path="/our-ethics" component={OurEthics}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/my-account" component={MyAccount}></Route>
          <Route path="/" exact >< Home onAdd={onAdd} products={products} /></Route>
        </Switch>
        <Signup />
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;

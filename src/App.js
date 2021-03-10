import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import { data } from "./DATA"
import ScrollToTop from "./ScrollToTop"
//import pages
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import OurEthics from "./pages/OurEthics"
import ShoppingCart from "./pages/ShoppingCart"
import Products from "./pages/Products"
import Category from "./pages/Category"
import Brand from "./pages/Brand"
import MyAccount from "./pages/MyAccount"
//import components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"
import NewsletterSignUp from "./components/NewsletterSignUp"

const cartItemsFromLocalStorage = JSON.parse(
  localStorage.getItem("cart") || "[]"
)

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage)

  //adding products to cart. if the prod id already exist in cart, then augmenting only quantity
  const onAdd = (product) => {
    const alreadyInCart = cartItems.find(
      (prevProduct) => prevProduct._id === product._id
    )
    if (alreadyInCart) {
      setCartItems(
        cartItems.map((prevProduct) =>
          prevProduct._id === product._id
            ? { ...alreadyInCart, qty: alreadyInCart.qty + 1 }
            : prevProduct
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  //removing products from cart
  const onRemove = (product) => {
    const existsInCart = cartItems.find(
      (prevProduct) => prevProduct._id === product._id
    )
    if (existsInCart.qty === 1) {
      setCartItems(
        cartItems.filter((prevProduct) => prevProduct._id !== product._id)
      )
    } else {
      setCartItems(
        cartItems.map((prevProduct) =>
          prevProduct._id === product._id
            ? { ...existsInCart, qty: existsInCart.qty - 1 }
            : prevProduct
        )
      )
    }
  }

  //deleting items from cart
  const onDelete = (product) => {
    const existsInCart = cartItems.find(
      (prevProduct) => prevProduct._id === product._id
    )
    if (existsInCart) {
      setCartItems(
        cartItems.filter((prevProduct) => prevProduct._id !== product._id)
      )
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  //total amount of items in the cart
  const getTotalCartItems = cartItems.reduce(
    (acumulator, currentItem) => acumulator + currentItem.qty,
    0
  )

  return (
    <Router>
      <ScrollToTop />
      <Box textAlign="center">
        <NavBar countCartItems={getTotalCartItems} />
        <Switch>
          <Route path="/products/:id">
            <ProductDetails products={products} onAdd={onAdd} />
          </Route>
          <Route path="/category/:category">
            <Category products={products} onAdd={onAdd} />
          </Route>
          <Route path="/brand/:brand" exact>
            <Brand products={products} onAdd={onAdd} />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              products={products}
            />
          </Route>
          <Route path="/products" exact>
            <Products products={products} onAdd={onAdd} />
          </Route>
          <Route path="/our-ethics" component={OurEthics}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/my-account" component={MyAccount}></Route>
          <Route path="/" exact>
            <Home onAdd={onAdd} products={products} />
          </Route>
        </Switch>
        <NewsletterSignUp />
        <Footer />
        <Copyright />
      </Box>
    </Router>
  )
}

export default App

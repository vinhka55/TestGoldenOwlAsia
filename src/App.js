import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { data } from './data';
import {useState} from 'react';

function App() {
  const {products} = data  //data get in file data.js
  const [cartItems, setCartItems] = useState([])
  const [tempProducts, setTempProducts] = useState(products)

  // this function will add product to cart and increase product in cart by click +
  function addToCart(product){
    const exist = cartItems.find(x=>x.id === product.id)
    if(exist){
      const newCartItems = cartItems.map(x => x.id === product.id ? {...exist,qty: exist.qty + 1} : x)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    }
    else{
      const newCartItems = [...cartItems, {...product, qty: 1}]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
      setTempProducts(tempProducts.map(x=> x.id === product.id ? {...tempProducts.find(x=>x.id === product.id), check: true} : x))
    }
  }
  
  // this function will reduce item in cart by click icon -
  function onReduce(product){
    const exist = cartItems.find(x=>x.id === product.id)
    if(exist){
      if(product.qty === 1){
        const newCartItems = cartItems.filter(x => x.id !== product.id)
        setCartItems(newCartItems)
        localStorage.setItem('cartItems',JSON.stringify(newCartItems))
        return
      }
      const newCartItems = cartItems.map(x => x.id === product.id ? {...exist,qty: exist.qty - 1} : x)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    }
  }

  // this function will remove product in cart by click trash icon
  function onRemove(product){
    const newCartItems = cartItems.filter(x => x.id !== product.id)
    setCartItems(newCartItems)
    localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    setTempProducts(tempProducts.map(x=> x.id === product.id ? {...tempProducts.find(x=>x.id === product.id), check: undefined} : x))
  }
  return (
    <div className="row container">
      <Products products={tempProducts} addToCart={addToCart}/>
      <Cart cartItems={cartItems} onAdd={addToCart} onReduce={onReduce} onRemove={onRemove}/>
    </div>
  );
}

export default App;

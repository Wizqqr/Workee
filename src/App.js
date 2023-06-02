import React from 'react';
import './App.css';
import image1 from './assets/cart/image1.jfif'
import image2 from './assets/cart/image2.jpg'
import image3 from './assets/cart/image3.jpg'
import image4 from './assets/cart/image4.jpg'
import image5 from './assets/cart/image5.jpg'
import image6 from './assets/cart/image6.jpg'
import image7 from './assets/cart/image7.jpg'
import image8 from './assets/cart/image8.jpg'
import Header from './components/header/header'
import Cart from './components/Cart/Cart'
import btn from './components/button/btn'
const products =[
  {
    image:image1,
    title:'Mens Lace up fashion Shoe',
    price:'64,79',
    btn:'ADD TO CART'
  },
  {
    image:image2,
    title:'Womens sneakers 20225',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image3,
    title:'Womens T-shirt 2022',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }, 
  {
    image:image4,
    title:'Mens black jacket',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image5,
    title:'Brazilia',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image6,
    title:'T-shirt for lady',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image7,
    title:'For China mens',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image8,
    title:'Its only for me',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }
]
function App() {
  return (
    <div className="app">
      <Header/>
      {
        products.map(product=>(
<Cart
image={product.image}
title={product.title}
desc={product.desc}
price={product.price}
btn={product.btn}
  />
        ))    
        }
    </div>
  );
}
export default App;
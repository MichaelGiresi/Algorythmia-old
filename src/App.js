import Hero from "./home/components/Hero";
import Upcomming from "./home/components/Upcomming";
import nav from '../src/home/styles/nav/nav.css'
import HomeOutput from "./home/components/HomeOutput";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ShopAll from "./ShopAll/components/ShopAll";
import Error from "./Error";
import Product from '../src/Product/components/Product'
import {useState, useEffect} from 'react'
import cart from './cart/style/cart.css'
import sheepimg1 from './assets/FollowTheLeaderPoster.jpeg'
import can from './assets/can.png'
import index from './index.css'

function App() {
  
  const [about, setAbout] = useState(false)
  const [cart, setCart] = useState(false)
  const [cartCount, setCartCount] = useState(1)
  const [hamburger, setHamburger] = useState(false)

  // Cart Count
  useEffect(() => {
    const cartRemoveCounter = document.getElementById('cart-increment-remove')
    const cartProductInfo = document.getElementById('cart-product-info-id')
    const cartSubtotal = document.getElementById('cart-subtotal-id')
    const cartPromo = document.getElementById('cart-promo-continue-id')
    const cartPayChoice = document.getElementById('cart-pay-choice-id')
    const cart = document.getElementById('cartId')
    const test = document.getElementsByTagName('body')
    if(cartCount === 1) {
      cartRemoveCounter.style.marginTop ='5px'
      cartRemoveCounter.style.padding ='0px'
      cartRemoveCounter.style.marginRight = '3px'
    } else {
      cartRemoveCounter.style.marginTop ='-2px'
      cartRemoveCounter.style.padding =''
    }
    if(cartCount === 0) {
      cartProductInfo.style.display ='none'
      cartSubtotal.style.display ='none'
      cartPromo.style.display ='none'
      cartPayChoice.style.display ='none'
      const empty = document.createElement('h1')
      empty.style.color = 'white'
      empty.style.fontFamily = 'JetBrains Mono'
      empty.style.textAlign = 'center'
      empty.innerHTML = 'Your Cart is Empty!'
      cart.appendChild(empty)
    }
  },[cartCount])

  // Cart Remove button inside of the product container
  const cartRemove = () => {
    const remove = document.getElementById('cart-product-remove')
    const cartProductInfo = document.getElementById('cart-product-info-id')
    const cartSubtotal = document.getElementById('cart-subtotal-id')
    const cartPromo = document.getElementById('cart-promo-continue-id')
    const cartPayChoice = document.getElementById('cart-pay-choice-id')
    const cart = document.getElementById('cartId')

    if(remove) {
      cartProductInfo.style.display ='none'
      cartSubtotal.style.display ='none'
      cartPromo.style.display ='none'
      cartPayChoice.style.display ='none'
      const empty = document.createElement('h1')
      empty.style.color = 'white'
      empty.style.fontFamily = 'JetBrains Mono'
      empty.style.textAlign = 'center'
      empty.innerHTML = 'Your Cart is Empty!'
      cart.appendChild(empty)
    }
  }

  // About Page 
  const aboutPage = () => {
      const aboutPage = document.getElementById('about-page')
      
      if(about) {
        setAbout(false)
        aboutPage.classList.toggle('show') 
        console.log(about)
        document.body.style.position = ''
        
      } else {
        setAbout(true)
        aboutPage.classList.toggle('show') 
        document.body.style.position = 'fixed'
        document.body.style.right = '0'
        document.body.style.top = '0'
        document.body.style.bottom = '0'
        document.body.style.left= '0'
        document.body.style.margin = 'auto'
        console.log(about)
      }
      
    }

    // Cart 
    // The parent div for the cart has an ID of cartId, and has a classname of cart-container
    // 1. Toggling another classlist to handle display none/flex
    // 2. Transition using opacity instead of right.
    const Cart = () => {
      const cartId = document.getElementById('cartId')
      const cartButton = document.getElementById('cart-button')
      const hhh = document.getElementById('hhhy')
      const html = document.getElementById('algo__html'); 
      // console.log(body)
      
      if(cart) {
        setCart(false) 
        cartId.classList.toggle('open')
        hhh.classList.toggle('open')
        console.log(cart)
        html.classList.remove('stop-scrolling')
      } else {
        setCart(true) 
        cartId.classList.toggle('open')
        hhh.classList.toggle('open')
        console.log(cart)
        html.classList.add('stop-scrolling')
      }
    }

    // NEW FUNCTION HERE FOR THE CART EXIT. SET FUNCTION FOR X BUTTON IN CART


    // Closing cart function for clicking outside of the cart.
    const closeCart = () => {
      const cartId = document.getElementById('cartId')
      const hhh = document.getElementById('hhhy')
      const html = document.getElementById('algo__html');

      if(hhh) {
        setCart(false)
        cartId.classList.toggle('open')
        hhh.classList.toggle('open')
        html.classList.remove('stop-scrolling')
        
      }
    }

    // Hamburger Menu
    const Hamburger = () => {
      const hamburgerId = document.getElementById('hamburgerId')
      const hamburgerButton = document.getElementById('hamburger-button')
      const html = document.getElementById('algo__html');
      
      if(hamburger) {
        setHamburger(false) 
        hamburgerId.classList.toggle('open')
        html.classList.remove('stop-scrolling')
        console.log(hamburger)
      } else {
        setHamburger(true) 
        hamburgerId.classList.toggle('open')
        html.classList.add('stop-scrolling')
        console.log(hamburger)
      }
    }

    const HamburgerCart = () => {
      const hamburgerId = document.getElementById('hamburgerId')
      const cartId = document.getElementById('cartId')
      const html = document.getElementById('algo__html');

      if(HamburgerCart) {

        hamburgerId.classList.toggle('open')
        cartId.classList.toggle('open') 
        html.classList.add('stop-scrolling')
      }
    }

    const HamburgerAbout = () => {
      const hamburgerId = document.getElementById('hamburgerId')
      const aboutPage = document.getElementById('about-page')

      hamburgerId.classList.toggle('open')
      aboutPage.classList.toggle('show') 
    }
    
    return (

    <Router>

      {/* About Page */}
      <div id="about-page" className="about-container" onClick={() => {aboutPage()}}>
        <div className="about-info-container">
          <h1>Algorythmia</h1>
          <h1>Algorythmia short description</h1>
          <h3>How does it work?</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
        </div>
      </div>

    {/* Cart and div left of cart that closes cart on click */}
      <div className="yyy">
        <div className="hhh" id="hhhy" onClick={() => {closeCart()}}></div>
        <div id="cartId" className="cart-container" > 
      <div className="cart-button-container">
        <button id="cart-button" className="cart-exit" onClick={() => {Cart()}}>X</button>
      </div>
      <div id="cart-product-info-id" className="cart-product-info-container">
        <div>
        <img className="cart-product-image" src={sheepimg1}/>
        <div className="cart-product-increment">
          <button id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>{cartCount < 2? <img  src={can} width={'15px'} height={'15px'}/> : "-" }</button>
          <div id="cart-increment">{cartCount}</div>
          <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
        </div>
        </div>
        <div className="cart-product-info-increment-wrapper">
        <div className="cart-product-info">
          <h3>Follow The Leader</h3>
          <h6>$12</h6>
          <h6>In Stock</h6>
          <button className="cart-product-remove-button" id="cart-product-remove" onClick={() => {cartRemove()}}>REMOVE</button>
        </div>
        <div className="cart-product-increment-laptop">
          <button id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>-</button>
          <div id="cart-increment">{cartCount}</div>
          <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
        </div>
        </div>
      </div>
      <div id="cart-subtotal-id" className="cart-subtotal-container">
        <div className="cart-subtotal">Subtotal</div>
        <div className="cart-value">{`$${cartCount * 12}`}</div>
      </div>
      <div id="cart-promo-continue-id" className="cart-promo-continue-container">
        <div className="cart-promo-title">Add Promo Code</div>
        <input className="cart-promo-input" placeholder="Enter your code"></input>
        <button className="cart-continue">Continue to Checkout</button>
      </div>
      <div id="cart-pay-choice-id" className="cart-pay-choice-container">
        <h1>Payment Methods</h1>
        <button className="cart-pay" id="cart-pay-paypal">Pay Pal</button>
        <button className="cart-pay" id="cart-pay-apple">Apple Pay</button>
        <button className="cart-pay" id="cart-pay-amazon">Amazon Pay</button>
      </div>


      </div>
      </div>


          <div className='nav'>
      <div className='logo-links-container'>
        <Link id='top' to="/" className="logo">A</Link>
        {/* <div className='logo'>A</div> */}

        <div className="nav-hamburger" onClick={() => {Hamburger()}}>
          <div className="nav-hamburger-top"></div>
          <div className="nav-hamburger-middle"></div>
          <div className="nav-hamburger-bottom"></div>
        </div>
        <div id="hamburgerId">
        <button id="hamburger-button" className="hamburger-exit" onClick={() => {Hamburger()}}>X</button>
        <div className="hamburger-about" onClick={() => {HamburgerAbout()}} >About Page</div>
        <a href="products" className="hamburger-shopall">Shop All</a>
        <div className="hamburger-cart" onClick={() => {HamburgerCart()}}>Cart ({cartCount})</div>
        </div>
        
        <div className='links-container'>

          <Link to='products' className="shopall">SHOP ALL</Link>
          {/* <div className='shopall'>SHOP ALL</div> */}
          <div id="about"className='about' onClick={() => {aboutPage()}}>ABOUT</div>


          <div className='cart' onClick={() => {Cart()}}>CART ({cartCount})</div>
        </div>
      </div>
      <div className='divider'></div>
    </div>
      <Routes>
        <Route path="/" element={<HomeOutput/>}/>
        <Route path="products" element={<ShopAll/>}  />
        <Route path="productpage" element={<Product/>} />
        <Route path="*" element = {<Error/>}/>
      </Routes>
      <div className="footer-container">
        <a href="/">ALGORYTHMIA</a>
        <div className="footer-links-container">
          <div>TERMS OF SERVICE</div>
          <div>SHOP ALL</div>
          <div>ABOUT</div>
        </div>
      </div>      
      <div className="footer-container-mobile">
      <a className="footer-algo" href="#top">ALGORYTHMIA</a>
        <div className="footer-links-container-mobile">
          <div>TERMS OF SERVICE</div>
          <Link style={{color:"#c3c3c3", textDecoration:'none'}} to='products'>SHOP ALL</Link>
          <div onClick={() => {aboutPage()}} style={{cursor:"pointer"}}>ABOUT</div>
        </div>
      </div>
    </Router>
  );

}

export default App;

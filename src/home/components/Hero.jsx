import hero from '../styles/hero/hero.css'
import feature1 from '../../assets/Wethreeheads01.jpeg'
import feature2 from '../../assets/Brokengrid01.jpeg'
import logo from '../../assets/AlgorythmiaLogotypeGif.gif'
import video from '../../assets/PosterMockup.mp4'
import can from '../../assets/can.png'
import App from '../../App'
const Hero = (props) => {
  const {cartCount, setCartCount} = props

  return (
    <div className='hero'>
      <div className='title-container'>
        <img className='title' src={logo}/>
        <div className='phrase'> ● YOU MAY HAVE IT</div>
      </div>
      <div className='featured-container'>
        <div className='container1' id="cart_Sheep">
          <img className='container1-image'src={feature1}/>
          <div className='container1-product-price-container'>
            <div className='container1-product-title'>Sheep</div>
            <div className='container1-price'>$30</div>
          </div>
        </div>
        <div id="test">
          <h1>Sheep Shirt</h1>
            {/* <h2>Select your size and quantity:</h2> */}
          <div id="sheep_sizes">
            <h3>Small</h3>
            <h3>Medium</h3>
            <h3>Large</h3>
            <h3>Extra Large</h3>
          </div>
          <div className="cart-product-increment">
                <div id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>{cartCount < 2? <img  src={can} width={'25px'} height={'25px'}/> : "-" }</div>
                <div id="cart-increment">{cartCount}</div>
                <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
              </div>
          
          <button id='sheep-add-to-cart-button'>Add to Cart</button>
        </div>
        <div className='container2'>
          <img className='container2-image' src={feature2}/>
          <div className='container2-product-price-container'>
            <div className='container2-product-title'>Broken Order</div>
            <div className='container2-price'>$300</div>
          </div>
        </div>
        <div className='info'>
            <h6>FEATURED</h6>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
      </div>
      <div className='video' >
        <video style={{borderRadius: '12px'}} src={video} width="100%" autoPlay muted loop ></video>
      </div>
    </div>
  )
}

export default Hero
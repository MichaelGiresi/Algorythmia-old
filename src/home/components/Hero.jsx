import hero from '../styles/hero/hero.css'
import feature1 from '../../assets/Wethreeheads01.jpeg'
import feature2 from '../../assets/Brokengrid01.jpeg'
import logo from '../../assets/AlgorythmiaLogotypeGif.gif'
import video from '../../assets/PosterMockup.mp4'
const Hero = () => {

  return (
    <div className='hero'>
      <div className='title-container'>
        <img className='title' src={logo}/>
        <div className='phrase'> ● YOU MAY HAVE IT</div>
      </div>
      <div className='featured-container'>
        <div className='container1'>
          <img className='container1-image'src={feature1}/>
          <div className='container1-product-price-container'>
            <div className='container1-product-title'>Sheep</div>
            <div className='container1-price'>$30</div>
          </div>
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
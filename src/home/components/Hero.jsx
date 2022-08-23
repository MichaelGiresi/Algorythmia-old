import React, {useState, useEffect} from 'react'
import hero from '../styles/hero/hero.css'
import feature1 from '../../assets/Wethreeheads01.jpeg'
import feature2 from '../../assets/Brokengrid01.jpeg'
import logo from '../../assets/AlgorythmiaLogotypeGif.gif'
import video from '../../assets/PosterMockup.mp4'
const Hero = () => {

  const [secret1, setSecret1] = useState(false)
  // const a = []

  // useEffect(() => {
  //   window.addEventListener('keydown', (e) => {
  //     const store = e.key
  //     if(store === 'm') {
  //       a.push(store)
  //     }
  //     console.log(a)
      // if(store === 'm') {
      //   a.push(store)
      // } else if (store === 'b'){
      //   a.push(store)
      // } else if (store === 'r') {
      //   a.push(store)
      // } else {

      // }
      // a.length = 0
      // // console.log(a)

  //     if(a.length === 3) {
  //       setSecret1(true)
  //       console.log(secret1)
  //     } else {
  //       setSecret1(false)
  //     }


  //   })
  // })
  



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
      <div className='video'>

       {/* <iframe className='iframe' src="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
       {secret1? <iframe width="100%" height="500px" src="https://www.youtube.com/embed/fZUCxE3hsME?autoplay=1" title="YouTube video player" frameBorder="0" allow="autoplay" autoplay={true} muted allowFullScreen></iframe> : <video src={video} width="100%" autoPlay muted loop ></video>}
       {/* <video src={video} width="100%" autoPlay loop ></video> */}

      </div>
    </div>
  )
}

export default Hero
import React from 'react'

function Hero() {
  return (
    <main className='hero container'>
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className='second-btn'>Category</button>
        </div>
        <div className="shopping">
          <p>Now Availaible On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  )
}

export default Hero

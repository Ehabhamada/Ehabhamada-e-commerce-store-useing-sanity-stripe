import Link from 'next/link'
import React from 'react'
import { urlfor } from '../lib/client'

function FooterBanner({footerbanner:{discount,largeText1,largeText2,saleTime,smallText,midText,desc,product,buttonText,image}}) {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
        <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>
              {buttonText}
            </button>
          </Link>
          <img src={urlfor(image)} alt="image" className='footer-banner-image'/>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
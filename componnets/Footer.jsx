import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiOutlineTwitter,AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
      <p>{`${new Date().getFullYear()} Ehab Hamada All Rights Reserverd`}</p>
      <p className='icons'>
       <AiFillFacebook/>
       <AiFillInstagram/>
       <AiOutlineTwitter/>
       <AiFillGithub/>
      </p>
    </div>
  )
}

export default Footer
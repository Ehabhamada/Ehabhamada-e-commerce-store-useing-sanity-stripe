import React from 'react'
import Head from 'next/head'
import NaveBar from './NaveBar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <Head>
        <title>Next JS Stor </title>
      </Head>
      <header>
        <NaveBar/>
      </header>
      <div className="main">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
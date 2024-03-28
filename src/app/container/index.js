import React from 'react'
import Topbar from '../component/Common/Topbar'
import Navbar from '../component/Common/Navbar'
import Footer from '../component/Common/Footer'

const Container = ({ children }) => {
  return (
    <main className='w-full bg-white'>
      <Topbar />
      <Navbar />
      <section className='w-full h-full'>{children}</section>
      <Footer />
    </main>
  )
}

export default Container

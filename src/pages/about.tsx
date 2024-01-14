import '../app/globals.css'
import Nav from '@/components/Nav'
import React from 'react'
import Image from 'next/image'
import MoreInfo from '@/components/MoreInfo'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'

const about = () => {
  return (
    <>
      <Nav />
      <MoreInfo/>
      <CallToAction />
      <Footer />
    </>
  )
}

export default about
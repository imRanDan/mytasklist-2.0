import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'

import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Features/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StatsSection from '../components/StatsSection'
import AppPreview from '../components/AppPreview'
import Features from '../components/Features'
import CTA from '../components/CTA'

function Home() {
  return (
    <div>
       <Hero />
      <HowItWorks />
      <StatsSection/>
       <AppPreview />
      <Features  />
      <CTA  />
    </div>
  )
}

export default Home

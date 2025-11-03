import React from 'react'
import AboutHero from '../components/HeroAbout'
import Testimonials from '../components/Testimonial'
import StatsSection from '../components/StatsCounter'
import HowItWorks from '../components/HowItWork'
import VisionMission from '../components/VisionMission'
import SecondSection from '../components/SecondAbout'

const About = () => {
  return (
  <>
  <AboutHero/>
  <SecondSection/>
  <StatsSection/>
  <VisionMission/>
  <Testimonials/>
  <HowItWorks/>
  </>
  )
}

export default About
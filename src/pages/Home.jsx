import React from 'react'
import HeroSection from '../components/Hero'

import StatsCounter from "../components/StatsCounter"
import StatsSection from '../components/OurStory'
import HowItWork from "../components/HowItWork"
import WhyChooseUs from '../components/WhyChooseUs'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonial'
import Faq from "../components/Faq"
import ServicesSection from '../components/ServiceSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <WhatWeDo/>
    <WhyChooseUs/>
    <HowItWork/>
    <ServicesSection/>
    <StatsCounter/>
    <Testimonials/>
    <Faq/>
    </>
  )
}

export default Home
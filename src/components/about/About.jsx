import React, {useEffect} from 'react'
import './about.css'
import AboutHero from './AboutHero'
import Line from '../common/line/Line'
import AboutNumber from './AboutNumber'
import AboutStory from './AboutStory'
import AboutTeam from './AboutTeam'
import HContact from '../home/HContact'
import Footer from '../common/footer/Footer'
import AboutFAQ from './AboutFAQ'
function About() {
  useEffect(() => {
      window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  return (
    <>
      <AboutHero/>
      <Line/>
      <AboutNumber/>
      <AboutStory/>
      <AboutTeam/>
      <AboutFAQ/>
      <HContact/>
      <Footer/>
    </>
  )
}

export default About
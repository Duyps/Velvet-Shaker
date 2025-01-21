import React, {useEffect} from 'react'
import Hero from './hero/Hero'
import HAbout from '../about/HAbout'
import HMenu from '../menu/HMenu'
import Line from '../common/line/Line'
import HOccasions from './HOccasions'
import HContact from './HContact'
import Footer from '../common/footer/Footer'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
}, []);
  return (
    <>
      <Hero/>
      <HAbout/>
      <Line/>
      <HMenu/>
      <Line/>
      <HOccasions/>
      <HContact/>
      <Footer/>
    </>
  )
}

export default Home
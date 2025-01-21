import React, {useEffect} from 'react'
import './about.css'

function HAbout() {
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
}, []);
  return (
    <>
      <section className='HAbout'>
        <p className='subtitle'>01// ABOUT</p>
        <p className='content'>
          Nestled in the heart of Hong Kong, Velvet Shaker is more than just a bar—it’s a sensory journey. Inspired by the city’s vibrant energy and global influences, this upscale cocktail haven combines sleek modern design with a cozy, intimate atmosphere.
        </p>
        <div className="linkWArrow">see gallery</div>
        <div className="gallery">
          <img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675ba8b0caad454ea3bb1057_Gallery%201-p-500.webp" alt="" className='gallery_1'/>
          <img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675ba8add27f2c1457e223ca_Gallery%203-p-500.webp" alt="" className='gallery_2'/>
          <img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675ba8ac1ae0a19ac2b5455f_Gallery%202-p-500.webp" alt="" className='gallery_3'/>
        </div>
      </section>
    </>
  )
}

export default HAbout
import React from 'react'
import Line from '../line/Line'
import { footer, footer_template } from '../../../data'
import './footer.css'
function Footer() {
  return (
    <>
    <Line/>
    <div className="footer">
        <div className="top">
            <div className="sitemap">
                <div className="subtitle">SITEMAP</div>
                <div className="footer-logo"><img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675b9deb1af862f5af1f7e72_Brand%20Velvet%20Shaker.svg" alt="" /></div>
            </div>
            <div className="links">
                <div className="subtitle">LINKS</div>
                {footer.map((val) => (
                    <div className="linkWArrow">{val.name}</div>
                ))}
            </div>
            <div className="template">
                <div className="subtitle">TEMPLATE</div>
                {footer_template.map((val)=> (
                    <div className="linkWArrow">{val.name}</div>
                ))}
            </div>
        </div>
        <div className="bottom">
            <p className='bottom-1'>Template designed with love by Wavesdesign, powered by Webflow</p>
            <p className='bottom-2'>see all templates</p>
            <p className='bottom-3'>©2024</p>
        </div>
    </div>
    </>
  )
}

export default Footer
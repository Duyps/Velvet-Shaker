import React, {useEffect, useRef} from 'react'
import "./hero.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Hero() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
    gsap.registerPlugin(ScrollTrigger);
    const heroImage = useRef(null);
    useEffect(() => {
        gsap.to(heroImage.current, {
            scrollTrigger: {
                trigger: heroImage.current,
                start: "top 80%",
                end: "top -20%",
                scrub: true
            }, 
            scale: 1.2,
            ease: "power1.out",
            duration: 5
        })
    })
    return (
        <>
            <div className="hero-section">
                <img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675ba2c30f81025a523cb7c1_Brand%20Velvet%20Shaker%20Big.svg" alt="logo"/>
                <div className="info">
                    <div className="info-left">
                        <div className="location">
                            <p>Cocktail bar located in </p>
                            <p>Lan Kwai Fong in Hong Kong</p>  
                        </div>
                        <div className="link">
                            <Link to='/bookings' style={{textDecoration: 'none'}}><div className="linkWArrow">bookings</div></Link>
                            <Link to='/menu' style={{textDecoration: 'none'}}><div className="linkWArrow">menu</div></Link>
                            <Link to='/about' style={{textDecoration: 'none'}}><div className="linkWArrow">about</div></Link>
                            <Link to='/shop' style={{textDecoration: 'none'}}><div className="linkWArrow">shop</div></Link>
                        </div>
                    </div>
                    <div className="info-right">
                        <p>Mon-Sun</p>
                        <p>18:00-late</p>
                    </div>
                </div>
            </div>
            <div className="hero-images">
                <img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675ba46a2ebd4cd811f7416b_Big%20Image%20Hero%20Home%20Velvet%20Shaker-p-2000.webp" alt="" className='hero-image' ref ={heroImage}/>
            </div>
            
        </>    
    )
}

export default Hero
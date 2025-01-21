import React, {useEffect, useRef} from 'react'
import './about.css'
import gsap from 'gsap'
import { infLoop } from '../../data'

function AboutHero() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
    const containerRef = useRef(null); // Tham chiếu đến container

    useEffect(() => {
        const container = containerRef.current;
        const containerWidth = container.scrollWidth; // Tính chiều dài container
        
        // Tạo hiệu ứng GSAP
        gsap.to(container, {
        x: `-${containerWidth / 2}px`, // Di chuyển nửa chiều dài container
        duration: 15, // Thời gian hoàn thành 1 vòng
        ease: "linear",
        repeat: -1, // Lặp vô tận
        modifiers: {
            x: (x) => parseFloat(x) % (containerWidth / 2) + "px", // Reset vị trí
        },
        });
    }, []);
   

    
  return (
    <>
        <div className="About-hero">
            <div className="title">
            <p>Located in the heart of Lan Kwai Fong, we set out to create a space where exceptional cocktails meet unforgettable moments.</p>
            <p>With a focus on creativity, quality ingredients, and a sleek atmosphere, Velvet Shaker has become a go-to destination for those seeking a unique bar experience.</p>
            </div>
            <div className="heading">
            <h1>Longest running cocktail bar in - Hong Kong</h1>
            </div>
        </div>
        <div className="hero-pic">
            <div className="image-container" ref={containerRef}>
                {infLoop.map((val) => (
                    <img src={val.url} alt="" />
                ))}
                {infLoop.map((val) => (
                    <img src={val.url} alt="" />
                ))}
            </div>
        </div>
    </>
  )
}

export default AboutHero
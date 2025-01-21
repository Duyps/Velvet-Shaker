import React, {useEffect, useRef} from 'react'
import './line.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

function Line() {
    const lineRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to(lineRef.current, {
            scaleX: 1,      // Đưa scaleX từ 0 lên 1
            duration: 1.5,  // Thời gian chạy hiệu ứng (1.5 giây)
            scrollTrigger: {
                trigger: lineRef.current,
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none none none"
            }
        })
    })
  return (
    <div className='line' ref={lineRef}></div>
  )
}

export default Line
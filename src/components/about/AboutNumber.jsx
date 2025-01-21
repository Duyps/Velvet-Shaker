import React, {useEffect, useRef} from 'react'
import './about.css'
import { ANumber } from '../../data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function AboutNumber() {
  useEffect(() => {
      window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  const numberRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      gsap.to(ref, {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ref,
          start: "top 70%",
          delay: index*0.2
        }
      });
    });
  }, []);
  
  return (
    <>
    <div className="About-number">
      <div className="subtitle">02// VELVETSHAKER IN NUMBERS</div>
      <div className="AboutNumber-content" >
        {ANumber.map((val,index) => (
          <div className="number-content" ref={el => (numberRefs.current[index] = el)}>
            <p>{val.decs}</p>
            <span>{val.number}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default AboutNumber
import React, {useEffect, useRef, useState} from 'react'
import Line from '../common/line/Line'
import { AboutFaq } from '../../data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function AboutFAQ() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
    const faqRefs = useRef([]);
    const [openIndex, setOpenIndex] = useState(null);
    gsap.registerPlugin(ScrollTrigger);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index? null:index);
    }

    useEffect(() => {
        faqRefs.current.forEach((ref, index) => {
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
    <Line/>
    <div className="FAQ-main">
        <div className="subtitle">05// FAQ</div>
        <div className="faq">
            {AboutFaq.map((val, index) => (
                <div className="content" ref={el => (faqRefs.current[index] = el)} key={index}
                onClick={() => handleToggle(index)} 
                >
                    <div className={`icon ${openIndex === index ? "open": ""}`}></div>
                    <div className="decs" >
                        <div className="question">{val.ques}</div>
                        <div className={`answer ${openIndex === index ? "open" : ""}`}>{val.ans}</div>
                    </div>
                </div>
            ))}
        </div>
        <Link to='/'><div className="linkWArrow AboutContact">contact us</div></Link>
    </div>
    </>
  )
}

export default AboutFAQ
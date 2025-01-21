import React, {useEffect} from 'react'
import './home.css';
import { homeContact_contact, homeContact_visit, homeContact_social, homeContact_picture } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Line from '../common/line/Line';

function HContact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
  return (
    <>
    <Line/>
        <div className="homeContact">
            <div className="subtitle">04// CONTACT</div>
            <div className="contact-content">
                <div className="visit">
                    <div className="contact-heading">Visit us</div>
                    {homeContact_visit.map((val) => (
                        <div className="homeContact-visit contain">
                            <h4>{val.heading}</h4>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
                <div className="contact">
                    <div className="contact-heading">Contact</div>
                    {homeContact_contact.map((val) => (
                        <div className="homeContact-contact contain">
                            <h4>{val.heading}</h4>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
                <div className="socials">
                    <div className="contact-heading">Socials</div>
                    {homeContact_social.map((val) => (
                        <div className="homeContact-social contain">
                            <i className={val.logo}></i>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="homeContact-picture">
                {homeContact_picture.map((val) => (
                    <img src={val.url} alt="" />
                ))}
            </div>
        </div>
    </>
  )
}

export default HContact
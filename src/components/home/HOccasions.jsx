import React, {useEffect, useRef} from 'react'
import './home.css'
import { homeOccasions } from '../../data'

function HOccasions() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
    
  return (
    <>
        <div className="homeOccasions">
            <div className="subttle">03// OCCASIONS</div>
            <div className="homeOccasion-containers" >
                {homeOccasions.map((val) => (
                    <div className="HO-container" id={`ho-container-${val.id}`}>
                        <h3>{val.header}</h3>
                        <img src={val.urll} alt="" />
                        <p>{val.decs}</p>
                    </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default HOccasions
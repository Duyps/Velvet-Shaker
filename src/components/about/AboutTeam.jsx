import React, {useEffect} from 'react'
import './about.css'
import { team } from '../../data'
import Line from '../common/line/Line'
function AboutTeam() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
  return (
    <>
    <Line/>
    <div className="AboutTeam">
        <div className="subtitle">03// TEAM</div>
        <h2>Meet the most skilled mixologist in town</h2>
        <div className="members">
            <div className="first-row">
                {team.slice(0,3).map((val) => (
                    <div className="infor">
                        <img src={val.pic} alt="" />
                        <h3>{val.name}</h3>
                        <p>{val.role}</p>
                    </div>
                ))}
            </div>
            <div className="second-row">
                {team.slice(3,7).map((val) => (
                    <div className="infor">
                    <img src={val.pic} alt="" />
                    <h3>{val.name}</h3>
                    <p>{val.role}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutTeam
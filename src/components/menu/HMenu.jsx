import React, {useEffect} from 'react';
import './menu.css'
import { homeMenu } from '../../data'

function HMenu() {
  useEffect(() => {
      window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  return (
    <>
      <section className='HMenu'>
        <div className="subtile">02// SELECTED DRINKS</div>
        <div className="menu-content">
          {homeMenu.slice(0,5).map((val) => (
            <div className="container" id="{val.id}">
              <div className="menu-name">
                <div className="name">{val.name}</div>
              </div>
              <div className="menu-decs">
                <div className="decs">{val.decs}</div>
              </div>
            </div>
          ))}
        </div> 
        
      </section>
    </>
  )
}

export default HMenu
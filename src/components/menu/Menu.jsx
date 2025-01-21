import React, {useEffect} from 'react'
import { menu } from '../../data'
import Line from '../common/line/Line'
import HContact from '../home/HContact'
import Footer from '../common/footer/Footer'
function Menu() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
  return (
    <>
    <div className="menu">
        {menu.map((val) => (
            <div className="category">
                <h1>{val.category}</h1>
                <img src={val.image} alt="" />
                <div className="items">
                    {val.item.map((items) => (
                        <div className="item">
                            <div className="name">
                                <p>{items.name}</p>
                                <p>{items.cost}</p>
                            </div>
                            <p>{items.decs}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    <Line/>
    <HContact/>
    <Footer/>
    </>
  )
}

export default Menu
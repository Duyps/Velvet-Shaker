import React, {useEffect} from 'react';
import './shop.css';
import { Link } from 'react-router-dom';
import { products } from '../../data';
import ABoutFAQ from '../about/AboutFAQ';
import Footer from '../common/footer/Footer';
import Line from '../common/line/Line';

function Shop() {
  useEffect(() => {
      // Cuộn lên đầu trang khi route thay đổi
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div className="shop">
        <h1>Shop    </h1>
        <div className="product-list">
            {products.map(product => (
            <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`}>
                    <div className="pic"><img src={product.pic} alt={product.name} /></div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </Link>
            </div>
            ))}
        </div>
      </div>
      
      
      <Line />
      <ABoutFAQ />
      <Footer />
    </>
  );
}

export default Shop;
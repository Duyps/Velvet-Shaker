import React, { useContext, useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data';
import { CartContext } from '../context/CartContext';
import Line from '../common/line/Line';
import AboutFAQ from '../about/AboutFAQ';
import Footer from '../common/footer/Footer';
import './shop.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  // Trạng thái cho modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
      // Cuộn lên đầu trang khi route thay đổi
      window.scrollTo(0, 0);
    }, []);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = product.thumbnails.findIndex((thumb) => thumb.url === currentImage);
    const nextIndex = (currentIndex + 1) % product.thumbnails.length;
    setCurrentImage(product.thumbnails[nextIndex].url);
  };

  const handlePreviousImage = () => {
    const currentIndex = product.thumbnails.findIndex((thumb) => thumb.url === currentImage);
    const previousIndex = (currentIndex - 1 + product.thumbnails.length) % product.thumbnails.length;
    setCurrentImage(product.thumbnails[previousIndex].url);
  };
  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 2);
  return (
    <>
      <div className="product">
        <div className="information">
          <div className="name">{product.name}</div>
          <div className="decs">{product.decs}</div>
          <div className="price">$ {product.price} USD</div>
          <div className="add">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
        <div className="images">
          <div className="main-pic">
            <img src={product.pic} alt="" />
          </div>
          <div className="thumbnails">
            {product.thumbnails.map((thumb, index) => (
              <div
                key={index}
                className="thumb"
                onClick={() => openModal(thumb.url)}
              >
                <img src={thumb.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <div className="modal-main-image">
              <img src={currentImage} alt="" />
            </div>
            <button className="modal-prev" onClick={handlePreviousImage}>
              ‹
            </button>
            <button className="modal-next" onClick={handleNextImage}>
              ›
            </button>
            <div className="modal-thumbnails">
              {product.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumb ${
                    thumb.url === currentImage ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImage(thumb.url)}
                >
                  <img src={thumb.url} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Line/>
      <div className="other-product">
        <div className="subtitle">02// OTHER PRODUCT</div>
        <div className="other-product-list">
          {otherProducts.map((otherProduct) => (
            <div className="other-product-item">
              <Link to={`/product/${otherProduct.id}`}>
                <img src={otherProduct.pic} alt={otherProduct.name} />
                <div className="other-product-name">{otherProduct.name}</div>
                <div className="other-product-price">{otherProduct.price}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Line />
      <AboutFAQ />
      <Footer />
    </>
  );
}

export default ProductDetail;

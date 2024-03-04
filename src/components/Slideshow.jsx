import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import axios from 'axios';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide-container">
        <img
          id='imgslide'
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide active"
        />
        <div className="slide-content">
          <button className='slideButton' onClick={goToPrevSlide}>Prev</button>
          <div className="slidetitle">
            <h3>{products.length > 0 && products[currentIndex].title}</h3>
            <p>{products.length > 0 && products[currentIndex].description}</p>
          </div>
          <button className='slideButton' onClick={goToNextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

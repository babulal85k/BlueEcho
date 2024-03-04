import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products: ', error);
      });
  }, [category]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 102,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <Navbar />
    <div>
      <h1>Products in {category}</h1>
      <div>
      <Slider {...settings}>
        {filteredProducts.map(product => (
          <div className="level1">
          <div className='circle-container' key={product.id}>
            <div className="circle">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="text-outside">
              <h3>{product.title}</h3>
              <p>{'$ ' + product.price}</p>
              <div className="addto">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        ))}
        </Slider>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;

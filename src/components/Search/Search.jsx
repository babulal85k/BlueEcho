import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../pages/Footer/Footer';
import Navbar from '../../pages/Navbar/Navbar';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = products.filter(product => {
      return product.title.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

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
      <h1 style={{fontSize: '40px', border: 'solid 1px blue', color: 'white', backgroundColor: 'blue', textAlign: 'center', borderRadius: '10px'}}>Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
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
                <button onClick={() => addToCart(product)}>Add to Cart</button>
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

export default Search;

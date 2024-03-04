import React, { useEffect, useState } from "react";
import axios from 'axios';
import Add from "./Add";
import Slideshow from "../../components/Slideshow";
import RecommendedProductsCarousel from "../../components/Recommended";

function Middle() {
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

    const images = products.map(product => product.image);
    console.log(images);

    return (
        <>
            <Add />
            <RecommendedProductsCarousel />
            <Slideshow images={images} />
            <RecommendedProductsCarousel />
            <Slideshow images={images} />
        </>
    )
}

export default Middle;
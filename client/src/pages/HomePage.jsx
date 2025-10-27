import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import { fetchProducts } from '../slices/productSlice';

// Helper function to chunk the array (remains the same)
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(fetchProducts(keyword));
  }, [dispatch, keyword]);

  const PRODUCTS_PER_ROW = 8;
  const productChunks = products ? chunkArray(products, PRODUCTS_PER_ROW) : [];

  // Determine the main title based on search keyword
  const mainTitle = keyword ? `Search Results for "${keyword}"` : 'Latest Products';

  return (
    <>
      {/* Show main title only once, unless it's search results */}
      {keyword && <h1>{mainTitle}</h1>}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <Alert variant='danger' style={{backgroundColor: '#dc3545', color: 'white', borderColor: '#bd2130'}}>
            {error.message || 'An error occurred fetching products.'}
        </Alert>
      ) : (
        <>
          {/* Map over the chunks to create multiple carousels */}
          {productChunks.map((chunk, index) => (
            <ProductCarousel
              // Use a simpler title, or just the main title for the first row
              key={index}
              title={index === 0 && !keyword ? mainTitle : ''} // Only show title for the first row if not searching
              products={chunk}
            />
          ))}
          {/* Display messages if no products are found */}
          {products && products.length === 0 && !keyword && (
             <Alert variant="info" style={{backgroundColor: '#343a40', color: 'white', borderColor: '#4a4e54'}}>
                No products found.
             </Alert>
          )}
           {products && products.length === 0 && keyword && (
             <Alert variant="info" style={{backgroundColor: '#343a40', color: 'white', borderColor: '#4a4e54'}}>
                No products match your search term "{keyword}".
             </Alert>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
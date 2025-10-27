import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { fetchProducts } from '../slices/productSlice';
import { useParams } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  // Get products from the Redux store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(fetchProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>{keyword ? `Search Results for "${keyword}"` : 'Latest Products'}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error.message || 'An error occurred'}</p>
      ) : (
        <Row>
          {products.map((product, index) => (
            // Add the animation class here
            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="product-card-column" style={{ animationDelay: `${index * 0.05}s`}}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; // Removed useSelector as it wasn't used here
import { addToCart } from '../slices/cartSlice';
import axios from 'axios';

// Card style for dark theme
const cardStyle = {
  backgroundColor: '#2c2f33',
  border: '1px solid #4a4e54',
  color: '#f8f9fa',
  borderRadius: '0.375rem',
};

// Style for list group items inside the card
const listItemStyle = {
    backgroundColor: 'transparent',
    borderBottom: '1px solid #4a4e54',
    padding: '1rem 1.25rem',
    color: '#f8f9fa', // Ensure default text is white/light grey
};
const lastListItemStyle = { ...listItemStyle, borderBottom: 'none' };

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     const fetchProduct = async () => {
        try {
          setLoading(true);
          setError(null);
          const { data } = await axios.get(`/api/products/${productId}`);
          setProduct(data);
          setLoading(false);
        } catch (err) {
          setError(err.response?.data?.message || err.message || 'Failed to fetch product');
          setLoading(false);
        }
      };
      fetchProduct();
  }, [productId]);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <>
      <Link className="btn btn-light my-3 animate-fade-in-up" to="/">
        Go Back
      </Link>

      {loading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        <Row className="animate-fade-in-up">
          {/* Product Image */}
          <Col md={5} className="mb-3 animate-fade-in-up delay-1">
            <Image src={product.imageUrl} alt={product.name} fluid rounded />
          </Col>

          {/* Product Details */}
          <Col md={4} className="mb-3 animate-fade-in-up delay-2">
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: 'transparent', borderBottom: '1px solid #4a4e54', paddingLeft: 0, paddingRight: 0 }}>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: 'transparent', borderBottom: '1px solid #4a4e54', color: '#adb5bd', paddingLeft: 0, paddingRight: 0 }}>
                Category: {product.category}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#adb5bd', paddingLeft: 0, paddingRight: 0 }}>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Add to Cart Section - APPLY IMPROVED STYLES */}
          <Col md={3} className="animate-fade-in-up delay-3">
            <Card style={cardStyle}>
              <ListGroup variant='flush'>
                <ListGroup.Item style={listItemStyle}>
                  <Row>
                    {/* Make label white */}
                    <Col style={{ color: '#f8f9fa' }}>Price:</Col>
                    <Col><strong>${product.price ? product.price.toFixed(2) : '0.00'}</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item style={listItemStyle}>
                  <Row>
                     {/* Make label white */}
                    <Col style={{ color: '#f8f9fa' }}>Status:</Col>
                    <Col style={{ color: product.stock > 0 ? '#28a745' : '#dc3545', fontWeight: 'bold' }}> {/* Make status bold */}
                      {product.stock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.stock > 0 && (
                  <ListGroup.Item style={listItemStyle}>
                    <Row className="align-items-center">
                       {/* Make label white */}
                      <Col style={{ color: '#f8f9fa' }}>Qty</Col>
                      <Col xs="auto">
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                          size="sm"
                          style={{ backgroundColor: '#495057', color: 'white', borderColor: '#6c757d' }}
                        >
                          {[...Array(product.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item style={lastListItemStyle}>
                  <div className="d-grid">
                    <Button
                      onClick={addToCartHandler}
                      variant='primary'
                      type='button'
                      disabled={product.stock === 0}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
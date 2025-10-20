import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // <-- Add useNavigate
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'; // <-- Add Form
import { useDispatch } from 'react-redux'; // <-- Import useDispatch
import { addToCart } from '../slices/cartSlice'; // <-- Import addToCart
import axios from 'axios';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1); // <-- Add state for quantity
  const { id: productId } = useParams();

  const dispatch = useDispatch(); // <-- Initialize useDispatch
  const navigate = useNavigate(); // <-- Initialize useNavigate

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  // --- Add this handler function ---
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };
  // ---------------------------------

  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
      <Row>
        {/* ... Col md={6} and Col md={3} for details remain the same ... */}
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item><h3>{product.name}</h3></ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                  <Row><Col>Price:</Col><Col><strong>${product.price}</strong></Col></Row>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Row><Col>Status:</Col><Col>{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</Col></Row>
              </ListGroup.Item>

              {/* --- Add Quantity Selector if in stock --- */}
              {product.stock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                        {[...Array(product.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {/* ------------------------------------------- */}

              <ListGroup.Item>
                  <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.stock === 0}>
                      Add To Cart
                  </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
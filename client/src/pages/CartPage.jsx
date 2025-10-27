import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, Alert } from 'react-bootstrap'; // <-- Added Alert
import { addToCart, removeFromCart } from '../slices/cartSlice';

// Style adjustments for dark theme
const itemStyle = { backgroundColor: '#2c2f33', borderBottom: '1px solid #4a4e54', color: 'white' };
const cardStyle = { backgroundColor: '#343a40', border: '1px solid #4a4e54', color: 'white' };
const selectStyle = { backgroundColor: '#495057', color: 'white', borderColor: '#6c757d' };

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // Redirect to login if not logged in, otherwise proceed to shipping (which we'll build later)
    navigate('/login?redirect=/shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1 className="mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Alert variant="info" style={{backgroundColor: '#343a40', color: 'white', borderColor: '#4a4e54'}}>
            Your cart is empty <Link to="/" style={{ color: '#61dafb' }}>Go Back</Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id} style={itemStyle} className="px-0"> {/* Remove padding */}
                <Row className="align-items-center">
                  <Col md={2}>
                    <Image src={item.imageUrl} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    {/* Link color adjusted via index.css */}
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className="text-center">${item.price.toFixed(2)}</Col>
                  <Col md={2} xs={5}> {/* Adjusted column size */}
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                      style={selectStyle}
                      size="sm" // Smaller select
                    >
                      {[...Array(item.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1} xs={2} className="text-end"> {/* Adjusted column size */}
                    <Button
                      type="button"
                      variant="light" // Use themed light button
                      onClick={() => removeFromCartHandler(item._id)}
                      size="sm" // Smaller button
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card style={cardStyle}>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ backgroundColor: 'transparent', borderBottom: '1px solid #4a4e54'}}>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
              </h2>
              <h4 className="mt-2">
                 ${cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: 'transparent' }}>
              <div className="d-grid"> {/* Use d-grid for full-width button */}
                <Button
                  type="button"
                  variant="primary" // Use themed primary button
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
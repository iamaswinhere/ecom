import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Card styling remains the same
const cardStyle = {
  backgroundColor: '#343a40',
  color: 'white',
  marginBottom: '1rem',
  border: '1px solid #454d55'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const Product = ({ product }) => {
  return (
    // Add Bootstrap flexbox classes to the Card
    <Card style={cardStyle} className="h-100 d-flex flex-column"> {/* <-- ADDED CLASSES */}
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.imageUrl || '/images/sample.jpg'} // Added fallback image
          variant="top"
          style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
        />
      </Link>

      {/* Make Card.Body grow to fill available space */}
      <Card.Body className="d-flex flex-column flex-grow-1"> {/* <-- ADDED CLASSES */}
        <Link to={`/product/${product._id}`} style={linkStyle}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* Push price to the bottom */}
        <Card.Text as="h5" className="mt-auto pt-2"> {/* <-- ADDED CLASSES (mt-auto pushes down) */}
          ${product.price ? product.price.toFixed(2) : '0.00'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
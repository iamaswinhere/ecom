import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Basic styling for the card in dark mode
const cardStyle = {
  backgroundColor: '#343a40', // Dark background for the card
  color: 'white', // White text
  marginBottom: '1rem', // Add some space below cards
  border: '1px solid #454d55' // Subtle border
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white', // White link text
};

const Product = ({ product }) => {
  return (
    <Card style={cardStyle}>
      <Link to={`/product/${product._id}`}>
        {/* Make image responsive */}
        <Card.Img src={product.imageUrl} variant="top" style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={linkStyle}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h5" className="my-2"> {/* Added margin */}
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
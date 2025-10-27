import React from 'react';
import { Col } from 'react-bootstrap';
import Product from './Product';

const ProductCarousel = ({ title, products }) => {
  return (
    <section className="my-4"> {/* Add margin between sections */}
      <h2>{title}</h2>
      {products && products.length > 0 ? (
        <div className="product-carousel-container">
          <div className="product-carousel">
            {products.map((product, index) => (
              <Col
                key={product._id}
                // Adjust these classes if needed based on HomePage.css
                xs={8} sm={6} md={4} lg={3}
                className="product-carousel-item"
                // Optional: apply staggered animation if desired
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`, opacity: 0}}
              >
                <Product product={product} />
              </Col>
            ))}
          </div>
        </div>
      ) : (
        <p>No products found in this section.</p>
      )}
    </section>
  );
};

export default ProductCarousel;
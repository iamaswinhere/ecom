import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1" style={{ color: '#dc3545' }}>404</h1>
          <h2>Page Not Found</h2>
          <p className="lead my-3"> {/* Use text-muted for softer text */}
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary">Go Back Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
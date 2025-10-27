import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
// We would add Redux/Axios logic here later

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // To show success/error messages
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    // --- We will add the API call logic here later ---
    console.log(`Password reset requested for: ${email}`);
    // Simulate API call
    setTimeout(() => {
      setMessage('If an account exists for this email, a password reset link has been sent.');
      setLoading(false);
    }, 1000);
    // ---------------------------------------------------
  };

  return (
    <FormContainer>
      <h1>Forgot Password</h1>
      <p style={{ color: '#adb5bd', marginBottom: '1.5rem' }}>
        Enter your email address and we will send you a link to reset your password.
      </p>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <p>Sending request...</p>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Make email required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
          Send Reset Link
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ForgotPasswordPage;
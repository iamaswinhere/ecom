import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer';
import { updateProduct, resetProductState } from '../../slices/productSlice';
import axios from 'axios';

const ProductEditPage = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');
  
  const productDetails = useSelector((state) => state.productList);
  const { loading, error, successUpdate } = productDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch(resetProductState());
      navigate('/admin/productlist');
    } else {
        const fetchProductDetails = async () => {
            try {
              const { data } = await axios.get(`/api/products/${productId}`);
              setName(data.name);
              setPrice(data.price);
              setImageUrl(data.imageUrl);
              setCategory(data.category);
              setStock(data.stock);
              setDescription(data.description);
            } catch (err) {
              console.error(err);
            }
          };
      fetchProductDetails();
    }
  }, [productId, dispatch, navigate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      _id: productId,
      name,
      price,
      imageUrl,
      category,
      stock,
      description,
    }));
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error.message}</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="price" className='my-2'>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="image" className='my-2'>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="stock" className='my-2'>
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" placeholder="Enter stock count" value={stock} onChange={(e) => setStock(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="category" className='my-2'>
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="description" className='my-2'>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className='mt-3'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductEditPage;
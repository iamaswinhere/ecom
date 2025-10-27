const router = require('express').Router();
let Product = require('../models/product.model');
const { protect, admin } = require('../middleware/authMiddleware'); // <-- Make sure this line exists ONLY ONCE

// --- PUBLIC ROUTES ---

// GET: Retrieve all products
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET: Retrieve a single product by ID
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET: Search for products by keyword
router.route('/search/:keyword').get(async (req, res) => {
  const keyword = req.params.keyword
    ? {
        name: {
          $regex: req.params.keyword,
          $options: 'i', // Case-insensitive search
        },
      }
    : {};

  try {
    const products = await Product.find({ ...keyword });
    res.json(products);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// --- PROTECTED ADMIN ROUTES ---

// POST: Create a new product (Admin Only)
router.route('/').post(protect, admin, async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    imageUrl: '/images/sample.jpg',
    category: 'Sample category',
    stock: 0,
    description: 'Sample description',
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ msg: 'Failed to create product', error: error.message });
  }
});


// DELETE: Delete a product by ID (Admin Only)
router.route('/:id').delete(protect, admin, (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST: Update a product by ID (Admin Only)
router.route('/update/:id').post(protect, admin, (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.price = req.body.price || product.price;
      product.imageUrl = req.body.imageUrl || product.imageUrl;
      product.category = req.body.category || product.category;
      product.stock = req.body.stock || product.stock;

      product.save()
        .then((updatedProduct) => res.json(updatedProduct)) // Send back the updated product
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
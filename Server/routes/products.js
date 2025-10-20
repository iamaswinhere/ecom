const router = require('express').Router();
let Product = require('../models/product.model');
const { protect, admin } = require('../middleware/authMiddleware'); // <-- Import middleware

// GET: Retrieve all products (Public)
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET: Retrieve a single product by ID (Public)
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
router.route('/').post(protect, admin, async (req, res) => {
    const product = new Product({
      name: 'Sample name',
      price: 0,
      user: req.user._id, // If you want to associate products with the user who created them
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

// --- PROTECTED ADMIN ROUTES ---

// POST: Add a new product (Admin Only)
router.route('/add').post(protect, admin, (req, res) => {
  const { name, description, price, imageUrl, category, stock } = req.body;
  const newProduct = new Product({ name, description, price, imageUrl, category, stock });
  newProduct.save()
    .then(() => res.status(201).json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
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
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
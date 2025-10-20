const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users.js');

require('dotenv').config(); // <-- Add this line

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// --- Add these lines to connect to MongoDB ---
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// ---------------------------------------------

app.get('/', (req, res) => {
  console.log('Request received at the root route!');
  res.send('Hello from the E-commerce backend!');
});

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
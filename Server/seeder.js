const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./data/products');
const Product = require('./models/product.model'); // Keep this name, it's correct!

dotenv.config(); // <-- CORRECTED LINE

const importData = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
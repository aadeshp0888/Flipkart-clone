import Product from '../../models/product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate('category', 'name'); // Populate category info
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  // Implement logic to create a new product (admin only)
  // You'll need to validate the data from the request body.
  // Example:
  try {
    const { name, description, price, image, category, countInStock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
      countInStock,
      user: req.user._id, // Assuming you have user authentication middleware
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct); // 201 Created
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid product data' }); // 400 Bad Request
  }
};

// Add more controller functions (update, delete)

export { getProducts, getProductById, createProduct };
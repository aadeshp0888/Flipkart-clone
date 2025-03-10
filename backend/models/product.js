import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL or path to image
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  // Add more fields as needed (e.g., brand, color, sizes)
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;
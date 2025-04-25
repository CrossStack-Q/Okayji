const Product = require('../models/Product');

exports.create = async (req, res) => {
  try {
    const { name, image, productCode, description, subCategoryId } = req.body;

    const product = new Product({
      name, image, productCode, description,
      subCategory: subCategoryId,
      variations: []
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addVariation = async (req, res) => {
  try {
    const { productId, size, color, price, discount } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.variations.push({ size, color, price, discount });
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find().populate('subCategory');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// New function to fetch a single product by ID
exports.getById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate('subCategory'); // Populate subCategory if needed

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

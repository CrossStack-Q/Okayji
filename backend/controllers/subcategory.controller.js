const SubCategory = require('../models/SubCategory');

exports.create = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    // Create a new subcategory
    const sub = new SubCategory({ name, category: categoryId });
    await sub.save();
    res.status(201).json(sub);  // Send back the created subcategory
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    // If categoryId is provided in the query, filter by it
    const { categoryId } = req.query;
    let subs;

    if (categoryId) {
      // Fetch subcategories by categoryId
      subs = await SubCategory.find({ category: categoryId }).populate('category');
    } else {
      // Fetch all subcategories if no categoryId is provided
      subs = await SubCategory.find().populate('category');
    }

    res.json(subs);  // Send subcategories as response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

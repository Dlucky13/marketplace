const errorHandler = require('../utils/errorHandler');
const CategoryModel = require('../models/Category');
const ProductModel = require('../models/Product');


module.exports.getAll = async (req, res) => {
  try {
    const categories = CategoryModel.find({user: req.user.id})
    res.status(200).json(categories);
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.getById = async (req, res) => {
  try {
    const category = CategoryModel.findById(req.params.id);
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  const category = new CategoryModel({
    name: req.body.name,
    user: req.user.userId
  })

  try {
    await category.save();
    res.status(201).json(category);
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await CategoryModel.remove({_id: req.params.id});
    await ProductModel.remove({category: req.params.id});
    res.status(200).json({
      message: "Category successfully deleted"
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  try {

  } catch (e) {
    errorHandler(res, e)
  }
}
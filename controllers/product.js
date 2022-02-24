const ProductModel = require('../models/Product');
const errorHandler = require('../utils/errorHandler');

module.exports.getByCategoryId = async (req, res) => {
  try {
    const products = await ProductModel.find({
      category: req.params.categoryId,
      userId: req.user.id
    })
    res.status(200).json(products);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.create = async (req, res) => {
  try {

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

module.exports.remove = async (req, res) => {
  try {

  } catch (e) {
    errorHandler(res, e)
  }
}
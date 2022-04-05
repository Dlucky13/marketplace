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
    const newProduct = await new ProductModel({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      description:  req.body.description,
      price: req.body.price,
      category: req.body.category,
      user: req.user.id
    }).save();

    res.status(201).json(newProduct);
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const product = ProductModel.findOneAndUpdate(
      {_id: req.body.id},
      {$set: req.body},
      {new: true}
      );
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await ProductModel.remove({_id: req.params.id});
    res.status(200).json({
      message: `Position with ${req.params.id} `
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
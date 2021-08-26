const Products = require('../models/products');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Products.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const products = await Products.findByPk(req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.categoryId
    };

    try {
      const product = await Products.create(PRODUCT_MODEL);
      console.log('Product crerated');
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.categoryId
    };

    try {
      const  product = await Products.update(PRODUCT_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(product);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const product = await Products.destroy({ where: { id: req.params.id } });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};
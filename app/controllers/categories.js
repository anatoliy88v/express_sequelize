const Categories = require('../models/categories');
const Product = require('../models/products');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Categories.findAll({
      include: [{
        model: Product,
      }]
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const categories = await Categories.findByPk(req.params.id);
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const CATEGORY_MODEL = {
      title: req.body.title,
      description: req.body.description,
    };

    try {
      const category = await Categories.create(CATEGORY_MODEL);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const CATEGORY_MODEL = {
      title: req.body.title,
      description: req.body.description,
    };

    try {
      const  category = await Categories.update(CATEGORY_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(category);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const category = await Categories.destroy({ where: { id: req.params.id } });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
};
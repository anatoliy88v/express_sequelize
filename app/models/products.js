const Sequelize = require('sequelize');
const db = require('../util/database');
const Categories = require('./categories');

const Product = db.define('product',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
  },
});

Product.belongsTo(Categories, {foreignKey: 'category_id'})
Categories.hasMany(Product, {foreignKey: 'category_id'})

module.exports = Product;
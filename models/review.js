'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Film, { foreignKey: 'filmId', as: 'film' });
      Review.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  Review.init({
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
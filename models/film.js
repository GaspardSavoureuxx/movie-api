'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Film.hasMany(models.Review, { foreignKey: 'filmId', as: 'reviews' });
    }
  }
  Film.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    releaseDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};
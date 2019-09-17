'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductUrlDetails = sequelize.define('ProductUrlDetails', {
    description: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {});
  ProductUrlDetails.associate = function(models) {
    // associations can be defined here
  };
  return ProductUrlDetails;
};
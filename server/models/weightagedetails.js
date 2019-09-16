'use strict';
module.exports = (sequelize, DataTypes) => {
  const WeightageDetails = sequelize.define('WeightageDetails', {
    weightage: DataTypes.STRING
  }, {});
  WeightageDetails.associate = function(models) {
    // associations can be defined here
  };
  return WeightageDetails;
};
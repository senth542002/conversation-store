'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConversationDetails = sequelize.define('ConversationDetails', {
    title: DataTypes.STRING
  }, {});
  ConversationDetails.associate = function(models) {
    // associations can be defined here
  };
  return ConversationDetails;
};
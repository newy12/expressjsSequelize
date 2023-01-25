const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('major_tmp', {
    col3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    col5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    col7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    col9: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'major_tmp',
    timestamps: false
  });
};

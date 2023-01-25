const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refresh_token', {
    refresh_token_seq: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    created_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    refresh_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_seq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_seq'
      }
    }
  }, {
    sequelize,
    tableName: 'refresh_token',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "refresh_token_seq" },
        ]
      },
      {
        name: "FKa1ifa9nr8keqkj2d5yuj1vnv4",
        using: "BTREE",
        fields: [
          { name: "user_seq" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('follow', {
    follow_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    follow_yn: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    followed_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_seq'
      }
    },
    following_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_seq'
      }
    }
  }, {
    sequelize,
    tableName: 'follow',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "follow_id" },
        ]
      },
      {
        name: "FK6cslhpdvbb0qu7n4a5hyx3oag",
        using: "BTREE",
        fields: [
          { name: "followed_user_id" },
        ]
      },
      {
        name: "FKmob5gqk7nmxu9p9xpiae8txeb",
        using: "BTREE",
        fields: [
          { name: "following_user_id" },
        ]
      },
    ]
  });
};

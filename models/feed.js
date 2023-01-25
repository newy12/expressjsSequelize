const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feed', {
    feed_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
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
    activated: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    comment_yn: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secret_yn: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    temp_save_yn: {
      type: DataTypes.CHAR(1),
      allowNull: false
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
    tableName: 'feed',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feed_seq" },
        ]
      },
      {
        name: "FK3liry2qcknctmm5h9wcp6crqs",
        using: "BTREE",
        fields: [
          { name: "user_seq" },
        ]
      },
    ]
  });
};

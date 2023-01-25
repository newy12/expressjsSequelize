const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feed_image', {
    feed_image_seq: {
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
    feed_seq: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feed_feed_seq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'feed',
        key: 'feed_seq'
      }
    }
  }, {
    sequelize,
    tableName: 'feed_image',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feed_image_seq" },
        ]
      },
      {
        name: "FKbass1f4997v8bg0o4y1to2twe",
        using: "BTREE",
        fields: [
          { name: "feed_feed_seq" },
        ]
      },
    ]
  });
};

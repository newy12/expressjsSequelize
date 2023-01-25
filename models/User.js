const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_seq: {
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
    device_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    follower: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    introduce: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_login_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leave_yn: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    major1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    push_alarm_yn: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    social_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_seq" },
        ]
      },
    ]
  });
};

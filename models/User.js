const { sequelize } = require("../models");
const db = require("../models");


const User = db.users;

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        userSeq: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        userNickname: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        major1: DataTypes.STRING,
        major2: DataTypes.STRING,
        introduce: DataTypes.STRING,
        follower: DataTypes.INTEGER,
        following: DataTypes.INTEGER,
        profileImageUrl: DataTypes.STRING,
        deviceToken: DataTypes.STRING,
        leaveYn: DataTypes.CHAR(1),
        pushAlarmYn: DataTypes.CHAR(1)
      },
      {
        timestamps: true,
        tableName :'user'
      }
      
    );
    return User;
  };
var DataTypes = require("sequelize").DataTypes;
var _banner = require("./banner");
var _feed = require("./feed");
var _feed_image = require("./feed_image");
var _follow = require("./follow");
var _major = require("./major");
var _major_tmp = require("./major_tmp");
var _refresh_token = require("./refresh_token");
var _setting = require("./setting");
var _user = require("./user");

function initModels(sequelize) {
  var banner = _banner(sequelize, DataTypes);
  var feed = _feed(sequelize, DataTypes);
  var feed_image = _feed_image(sequelize, DataTypes);
  var follow = _follow(sequelize, DataTypes);
  var major = _major(sequelize, DataTypes);
  var major_tmp = _major_tmp(sequelize, DataTypes);
  var refresh_token = _refresh_token(sequelize, DataTypes);
  var setting = _setting(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  feed_image.belongsTo(feed, { as: "feed_feed_seq_feed", foreignKey: "feed_feed_seq"});
  feed.hasMany(feed_image, { as: "feed_images", foreignKey: "feed_feed_seq"});
  feed.belongsTo(user, { as: "user_seq_user", foreignKey: "user_seq"});
  user.hasMany(feed, { as: "feeds", foreignKey: "user_seq"});
  follow.belongsTo(user, { as: "followed_user", foreignKey: "followed_user_id"});
  user.hasMany(follow, { as: "follows", foreignKey: "followed_user_id"});
  follow.belongsTo(user, { as: "following_user", foreignKey: "following_user_id"});
  user.hasMany(follow, { as: "following_user_follows", foreignKey: "following_user_id"});
  refresh_token.belongsTo(user, { as: "user_seq_user", foreignKey: "user_seq"});
  user.hasMany(refresh_token, { as: "refresh_tokens", foreignKey: "user_seq"});

  return {
    banner,
    feed,
    feed_image,
    follow,
    major,
    major_tmp,
    refresh_token,
    setting,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

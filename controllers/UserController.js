const db = require("../models");
const User = db.users;

const addUser = async (req, res) => {
    let info = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = await User.create(info).catch((err) => console.log(err));
    res.status(200).send(user);
  };

  const getAllUsers = async (req, res) => {
    let users = await User.findAll({}).catch((err) => console.log(err));
    res.status(200).send(users);
  };
  
  const getUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } }).catch((err) =>
      console.log(err)
    );
    res.status(200).send(user);
  };

  const updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } }).catch((err) =>
      console.log(err)
    );
    res.status(200).send(user);
  };

  const deleteUser = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id: id } }).catch((err) => console.log(err));
    res.status(200).send("User is deleted");
  };

  module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
  };
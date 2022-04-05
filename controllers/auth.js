const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');
const upload = require('../middleware/upload');

module.exports.login = async (req, res) => {
  const user = await UserModel.findOne({email: req.body.email});

  if (user) {
    const password = req.body.password;
    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (isCorrectPassword) {

      const token = jwt.sign({
        email: user.email,
        userId: user._id
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })

    } else {
      res.status(401).json({
        message: 'Password is incorrect'
      })
    }

  } else {
    res.status(404).json({
      message: `User with email ${req.body.email} dont found`
    })
  }
}

module.exports.register = async (req, res) => {

  const emailAlreadyUsed = await UserModel.findOne({email: req.body.email});

  if(emailAlreadyUsed) {
    res.status(409).json({
      message: 'This email already used. For registration use another email'
    })
  }

  const salt = bcrypt.genSaltSync(10);
  const password = req.body.password;

  const user = new UserModel({
    email: req.body.email,
    password: bcrypt.hashSync(password, salt),
    avatarUrl: req.file ? req.file.path : 'uploads/avatar.png',
    role: req.body.role ?? 'member'
  })

  try {
    await user.save();
    res.status(201).json({
      message: 'User successfully created',
      user
    })
  } catch (e) {
    errorHandler(res, e)
  }

}
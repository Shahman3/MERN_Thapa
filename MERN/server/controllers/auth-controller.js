const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//------------------------
// controllers
//------------------------
// *In an express js application , a 'controller' refers to a part of your code that is responsible for handling the application logic. Controllers are typically used to rrocess incoming request, interact with models (data sources), and send reponses back to client. they help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.
//------------------------

// *---------------------
// Home Logic
// *---------------------
const home = async (req, res) => {
  try {
    res.status(200).send("Hello home router");
  } catch (error) {
    console.log(error);
  }
};
// *---------------------
// Registration Logic
// *---------------------
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email }); //email : email
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
    // res.status(200).json({ message: req.body });
  } catch (error) {
    // res.status(500).json("Internal server error ");
    next(error);
  }
};
// *---------------------
// User Login Logic
// *---------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswardvalid = await bcrypt.compare(password, userExist.password);
    if (isPasswardvalid) {
      res.status(201).json({
        message: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid password " });
    }
  } catch (error) {
    // res.status(500).json("Internal server error ");
    next(error);
  }
};

// *-------------------
//* To send user data:User Logic
// *-------------------

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};
module.exports = {
  home,
  register,
  login,
  user,
};

const User = require("../models/user-model");
const Contact = require("../models/contact-modle");
//*-----------------------------
//? GetAllUsers Logic
//*-----------------------------
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "NO Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? GetAllContact Logic
//*-----------------------------
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    // console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "NO contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? Delete User Logic
//*-----------------------------
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? Delete Contact Logic
//*-----------------------------
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? GET single User Logic
//*-----------------------------
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? GET single Contact Logic
//*-----------------------------
const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Contact.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? User Update Logic
//*-----------------------------
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedUser = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
//*-----------------------------
//? Contact Update Logic
//*-----------------------------
const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateContactData = req.body;
    const updatedContact = await Contact.updateOne(
      { _id: id },
      {
        $set: updateContactData,
      }
    );
    return res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
  updateContactById,
  getContactById,
};

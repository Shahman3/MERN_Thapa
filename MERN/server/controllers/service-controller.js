const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(400).json({ message: "NO services found" });
    }
    return res.status(200).json({ message: response });
  } catch (error) {
    console.log(`services : ${error}`);

    // next();
  }
};
module.exports = services;

const mongoose = require("mongoose");
// const URI ="mongodb+srv://Shahman:malik99@cluster0.ipoj9vq.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(URL);
const URI = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};
module.exports = { connectdb };

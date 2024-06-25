// Schema: Defines the structure of the documents within a collection. It specifies the fields, their type ,and any additional constraints or validations.
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
//? secure the password with the bcryptjs
userSchema.pre("save", async function (next) {
  // console.log(this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});
//////////////////////////////////////////////////////////////
// **What is JWT ? **
// -Json web tokens (JWT) ia an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
//? - JWTs are often used for authentication and authorization in web application.
//? 1. **Authentication**: Verifying the identity of a user or client.
//? 2. **Authorization**: Deterrmining what actions a user or client is allowed to perform .
//? Tokens, such as JWTs , are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then stored on the client-side (e.g., in cookies or local storage) for later use.

//** Go to jwt.io website to see how jwt works.
//**Components of a JWT:**
// 1. Header : contains metadata about the token ,The header typically consists of two parts: the type of the token, which is JWT, and the algorithm that is used, such as HMAC SHA256 or RSA SHA256. It is Base64Url encoded to form the first part of the JWT.
// 2. Payload: Contains claims or statement about an entity (typically , the user) and additional data. Common claims are user ID,username , expiration time.
// 3. Signature: The signature is used to verify that the issuer of the JWT is who it says it is and to ensure that the message wasn't changed along the way.
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error(error);
  }
};
///////////////////////////////////////////////////////////////

//?Model act as a higher-level abstraction that interacts withthe database based on the defined schema .it represent a collection and provides an interface for querying,creating, updating ,and deleting documents in that collection .MOdels are created from schema and enable you to work with Mongodb data in a more structured manner in your application .
//---define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;

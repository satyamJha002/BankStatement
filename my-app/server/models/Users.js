const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  bankAccountNo: Number,
  bankName: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  country: String,
  zipCode: Number,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

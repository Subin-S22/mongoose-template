const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.split("").some((val) => /^[A-Z]*$/.test(val)),
      message: () => "Name should have atleast one capital letter",
    },
  },
  age: {
    type: Number,
    require: true,
    min: 17,
    max: 66,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

module.exports = mongoose.model("User", UserSchema);

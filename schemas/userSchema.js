const { Schema, model } = required("mongoose");

const user = new Schema({
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  birthday: {
    type: String,
    default: "00.00.0000",
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  city: {
    type: String,
    default: "Not filled",
  },
});

const User = model("user", user);

module.exports = User;

const { Schema, model, SchemaTypes } = required("mongoose");

const pet = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirthd: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
});

const Pet = model("pet", pet);

module.exports = Pet;

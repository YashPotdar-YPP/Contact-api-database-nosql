const mongooes = require("mongoose");

const schema = new mongooes.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    maxlenght:10,
    minlenght:10
  },
});

const Contact = new mongooes.model("Contact", schema);
module.exports = Contact;

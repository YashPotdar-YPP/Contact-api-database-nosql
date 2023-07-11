const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:2IQudHXIF1Qi2Ff2@contact-api.pkebgcn.mongodb.net/contact-api")
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("no connection");
  });

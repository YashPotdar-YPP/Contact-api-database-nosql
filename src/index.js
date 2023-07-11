const express = require("express");
const http = require("http");
const router = require("./routers/contact");
const cors =  require("cors")
const path = process.env.PORT || 4000;

require("../src/db/conn");
const app = express();
app.use(express.json());
app.use(cors())
app.use(router)


app.listen(path, () => {
  console.log(`Server is live on ${path} `);
});

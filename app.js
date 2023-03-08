const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Lena:NC7TEUpA7XDstw@cluster0.uoodyir.mongodb.net/RestAPI?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

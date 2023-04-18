const mongoose = require("mongoose");

const url = "mongodb+srv://anjalinand0912:Anjali09@cluster-quora.gqtofhk.mongodb.net/quora-clone-mern?retryWrites=true&w=majority"
  

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
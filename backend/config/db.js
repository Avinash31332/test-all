import mongoose from "mongoose";

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_ATLAS)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error in connecting to DB", err.message);
    });
}
export default connectToDB;

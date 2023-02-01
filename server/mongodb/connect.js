import mongoose from "mongoose";
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(`MongoDB Error: ${err}`));
};

export default connectDB;

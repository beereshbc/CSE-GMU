import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}gmu-cse`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

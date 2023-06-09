import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected to ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to ${error}`);
    process.exit(1);
  }
};

export default connectionDB;

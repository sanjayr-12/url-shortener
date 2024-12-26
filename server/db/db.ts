import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
import { Error } from "mongoose";

const uri = process.env.MONGO_URI;
const connect = async () => {
  if (!uri) {
    throw new Error("No connection string");
  }
  try {
    await mongoose.connect(uri);
    console.log("db connected");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("unknow error");
    }
  }
};

export default connect

import mongoose, { mongo, Schema } from "mongoose";

interface UName {
  name: string;
  url: string;
}

const URLSchema = new Schema<UName>({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    },
});

const URLModel = mongoose.model("url", URLSchema);

export default URLModel;

import mongoose, { Schema } from "mongoose";

type Expire = {
  type: Date;
  default: Date;
  expires: number;
};

interface UName {
  name: string;
  url: string;
  createdAt: Expire;
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
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const URLModel = mongoose.model("url", URLSchema);

export default URLModel;

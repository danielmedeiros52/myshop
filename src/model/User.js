import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, require: true },
    login: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("users", autorSchema);

export default users;

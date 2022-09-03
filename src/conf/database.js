import mongoose from "mongoose";


mongoose.connect("mongodb+srv://daniel:daniel123@cluster0.bia3btm.mongodb.net/myshop")

let db = mongoose.connection;

export default db;
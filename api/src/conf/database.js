import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DATABASE_URI)

let db = mongoose.connection;

export default db;
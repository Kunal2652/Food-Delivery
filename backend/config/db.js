import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('db-url').then(()=>console.log("DB connected"));
}

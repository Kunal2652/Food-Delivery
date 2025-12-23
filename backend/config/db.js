import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Manu:230605@cluster0.xzi7ixo.mongodb.net/?appName=food-del').then(()=>console.log("DB connected"));
}
import mongoose from "mongoose";

export const connectDB =async()=>{
   await mongoose.connect('mongodb+srv://deep_1611:9198955237Ad@cluster0.ghtxg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
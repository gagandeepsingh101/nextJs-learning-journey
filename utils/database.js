import mongoose from "mongoose";

export async function connectDB (){
try {
   const {connection}= await mongoose.connect("mongodb://localhost:27017");
   console.log("Database connected "+connection.host);
} catch (error) {
    console.log(error.message)
}    
}
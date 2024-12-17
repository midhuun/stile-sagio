import mongoose from "mongoose";

export default async function ConnectToDB(){
    const url:any = process.env.MONGODB_URI;
    try{
        await mongoose.connect(url)
        console.log("Conneceted")
    }
    catch(err){
        console.log("Error in Connecting Mongo DB",err)
    }
}
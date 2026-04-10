// connecting to MongoDB to NodeJS using Mongoose & defining schema & models
const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully");

        // creating a schema
        const  usrSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });

        const user = mongoose.model("User",usrSchema);

        console.log("Mongoose schema & model created successfully");
        console.log("Model name:",user.modelName);

        await mongoose.connection.close();
        console.log("connection close");
    }
    catch(error){
        console.log("Failed to connect to DB",error.message);
    }
}

main();
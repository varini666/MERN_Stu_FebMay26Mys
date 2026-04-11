// combined example of virtual, index, filter, select, sort, lean
const mongoose = require("mongoose");

async function demo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully");
        
        // const productSchema = new mongoose.Schema({
        //     name:String,
        //     price:Number,
        //     category:String,
        //     description:String,
        //     stock:Number,
        //     tag:String
        // });

    const userSchema = new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:{type:String, index:true},
        username:{type:String, unique:true},
        role: String,
        createdAt: Date,
        tag:String
    },
        {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
});
// Compound index
// Query filter by role & sort by createdAt
userSchema.index({role:1,createdAt:-1});

// A virtual field is not stored on MongoDB
// It is computed dynamically from existing stored fields
userSchema.virtual("fullname").get(function(){
    return this.firstName +" "+this.lastName;
});
const User = mongoose.models.PerformanceUser || mongoose.model("performanceUser",userSchema);

await User.deleteMany({tag:"demo-example"});
await User.deleteMany({tag:"demo-example1"});

await User.create([
    {
        firstName:"varini",
        lastName:"prakash",
        email:"vp@v.com",
        username:"vp123",
        role: "user",
        createdAt: new Date("2026-04-11"),
        tag:"demo-example"
    },
    {
        firstName:"vanitha",
        lastName:"HM",
        email:"HM@v.com",
        username:"HM123",
        role: "admin",
        createdAt: new Date("2026-04-01"),
        tag:"demo-example"
    },
    {
        firstName:"kavya",
        lastName:"GA",
        email:"GA@v.com",
        username:"GA123",
        role: "user",
        createdAt: new Date("2026-04-02"),
        tag:"demo-example1"
    },
]);

// filter,select,sort,lean
const users = await User.find({tag:"demo-example"}).select("firstName lastName email role createdAt")
                .sort({createdAt:-1})
                .limit(2)
                .lean();
console.log("Optimized user query result:",users);

const oneUser = await User.findOne({email:"HM@v.com",tag:"demo-example"});
console.log("virtual fullname:",oneUser.fullname);
    }
    catch(error){
    console.log("Aggregate demo error:",error.message);    
}
}
demo();
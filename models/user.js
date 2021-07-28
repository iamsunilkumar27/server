const mongoose =require ('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    visitedon:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User', UserSchema);
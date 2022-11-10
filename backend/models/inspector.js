import mongoose from "mongoose";

const inspectorSchema = mongoose.Schema({

    firstName:{type: String, required: true},
    lastName:{type: String, required: false},
    address:{type: String, required: true},
    nic:{type: String, required: true},
    email:{type: String, required: false},
    phone:{type: String, required: true},
    
});

export default mongoose.model("inspecters", inspectorSchema);
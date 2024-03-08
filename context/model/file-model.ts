import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  { 

    username:{
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    filename:{
      type: String,
      required: true,
      min: 0,
      max: 20,
    },
    imageurl:{
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    
    fileUrl:{
        type:String,
        required: true,
        unique: true,
    }
},
  { timestamps: true }
);
export const File = mongoose.models?.File || mongoose.model("File", FileSchema);
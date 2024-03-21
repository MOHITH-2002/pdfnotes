import mongoose from "mongoose";

const folderSchema = new mongoose.Schema({
    folderName:{
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    email:{
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
},{ timestamps: true });

export const Folder = mongoose.models?.Folder || mongoose.model("Folder", folderSchema);
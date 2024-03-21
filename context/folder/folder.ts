"use server"
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "../auth/auth";
import { connectToDatabase } from "../database";
import { Folder } from "../model/folder-model";

export const foldername =async  (name: string)=>{
noStore(); 
    try {
        const user = await auth();
        const email = user?.user?.email;
        await connectToDatabase();
        

        const existingFolder = await Folder.findOne({ folderName: name, email: email });

        if (existingFolder) {
            return "Folder already exists";
        }else{
            const newfolder = await Folder.create({folderName:name, email: email});
            return "Folder created";
        }
        
        
    } catch (error) {
        console.log(error);
        
    }

}

export const getAllFolders = async () => {
      noStore(); 
    try {
        const user = await auth();
        const email = user?.user?.email;
        await connectToDatabase();
        
        // Find all folders for the logged-in user, sorted in descending order by folderName
        const folders = await Folder.find({ email: email });
        return JSON.parse(JSON.stringify(folders));

        
        
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to handle it outside of this function
    }
}
export const deletefolder = async (id: any) => {
    noStore(); 
    try {
        
        
        await connectToDatabase();
        const del = await Folder.findByIdAndDelete({_id:id.id});
        return "Folder deleted successfully";
    } catch (error) {
        console.log(error);
        throw error;
    }
}

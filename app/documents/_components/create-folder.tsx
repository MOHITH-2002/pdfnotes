"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { foldername } from "@/context/folder/folder";
import { ReactEventHandler, useState } from "react";
import toast from "react-hot-toast";


const  CreateFolder = ()=> {
    const [folderName, setFolderName] = useState("");

  const handleChange: ReactEventHandler<HTMLInputElement> = (e) => {
    
    setFolderName(e.currentTarget.value);
    
    
    
  };
  const handleClick = async ()=>{
    const res = await foldername(folderName);
    if(res === "Folder created"){
        toast.success("Folder is created")
      
    }else{
        toast.error("Folder already exists")
    }
    window.location.reload();
    
  }
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="z-[99999] w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
<p className="hidden md:flex">Create folder</p>
</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[350px] rounded-md md:max-w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Create Folder</AlertDialogTitle>
        <Input placeholder="folder name" type="text" onChange={handleChange}  />
        </AlertDialogHeader>
        
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default CreateFolder;

"use client";

import { toast } from "react-hot-toast";
import { Link, Pencil, Trash2 } from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
 
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { deletefolder } from "../folder/folder";


interface ActionsProps {
    id:string;
   
    children: React.ReactNode;
};

export const FileAction = ({
    id,children
}: ActionsProps) => {

       



  

    const onDelete = async () => {
        // console.log(id);
        
    const res = await deletefolder({id:id});
    
    if(res === "Folder deleted successfully"){
        toast.success("Folder deleted successfully")
      
    }else{
        toast.error("Something is error try later")
    }
    
      window.location.reload();

  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
      
        className="w-60"
      >
        <DropdownMenuItem>

          <Button
            variant="ghost"
            size="sm"
            className="p-2 cursor-pointer flex gap-3 text-sm w-full justify-start font-normal"
            onClick={onDelete}
            >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
              </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};




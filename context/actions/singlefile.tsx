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
import { useEdgeStore } from "@/lib/edgestore";
import { deletefiles } from "../file/fileupload";


interface ActionsProps {
    id:string;
    url: string;
    children: React.ReactNode;
};

export const SingleFileActions = ({
    url,id,children
}: ActionsProps) => {

        const { edgestore } = useEdgeStore();



  const onCopyLink = () => {
   navigator.clipboard.writeText(url)
    
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
  };

    const onDelete = async () => {
      
    await edgestore.publicFiles.delete({
  url: url,
});
      const del = await deletefiles({id})
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
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer"
        >
          <Link className="h-4 w-4 mr-2" />
          Copy link
        </DropdownMenuItem>
        
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




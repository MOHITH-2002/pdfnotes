"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

  DialogFooter,

  DialogTrigger,
} from "@/components/ui/dialog"
import { MultiFileDropzoneUsage } from "./Multifile"
import { Upload } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export function UploadFile() {
const submit =  () => {
    
    window.location.reload(); // Reload the page
  };

  return (
          <Dialog>
    
      


      <DialogTrigger asChild>
        
        <Button variant="outline" className="flex gap-1 justify-start">
          <Upload />
          <h1 className="flex md:hidden lg:flex">

          Upload
          </h1>
        </Button>
        
      </DialogTrigger>
        
      <DialogContent className="sm:max-w-[425px]">
        
        <MultiFileDropzoneUsage />
      <DialogFooter>
        <Button onClick={submit}>
          Submit
        </Button>
      </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


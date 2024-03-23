import { Button } from "@/components/ui/button"

import {
  Sheet,

  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet"
import { UploadFile } from "../Uploadfile"
import CreateFolder from "../create-folder"
import { Register } from "../register"
import Logout from "../logout"

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full pl-2 pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col gap-5'>
      
        <UploadFile/>
      
        <CreateFolder/>
        <Register/>
        <Logout/>
    </div>
        
      </SheetContent>
    </Sheet>
  )
}

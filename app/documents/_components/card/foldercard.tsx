// "use client"
import { cn } from '@/lib/utils'

import Link from 'next/link'
import React from 'react'


import Image from 'next/image'

import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import { FileAction } from '@/context/actions/FileAction';


interface boardCard {
    name:string;
    id:string;
}
const Foldercard = async  ({id,name}:boardCard) => {


    
    
    
    
    return (
      <>
        
    <Link href={`documents/${name}`}>
    <div className="group aspect-[100/127] border rounded-lg  dark:hover:shadow-[0_2px_2px_2px_#434242] hover:shadow-[0_2px_2px_2px_#D6E4E5] justify-between flex flex-col overflow-hidden">
      <div className={cn("relative flex-1 " )}>
        
        
        
          
          
          <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1711005165/folder_uf8uxo.svg" alt="folder" fill className="object-fit"/>
        

        <FileAction
            id={id} 
            
          >
            <button
              className="absolute top-1 z-50 right-0 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-2 outline-none"
            >
              <MoreVertical
                className=" opacity-75 hover:opacity-100 transition-opacity"
              />
            </button>
          </FileAction>
            
        
            


        </div>
        <div className="border-t-2 bg-slate-100">

        <div className={cn("relative p-3 flex ")}>
      
      <h1 className=" text-[18px]  text-black truncate">
         {name}
         
      </h1>
      

      
      
    </div>
        </div>
      
    </div>
    </Link>

      </>
  )
}

export default Foldercard